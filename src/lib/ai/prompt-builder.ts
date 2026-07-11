import { TrainingPair, PersonalityProfile, Message } from '@/types';

interface PromptBuilderOptions {
  profile: PersonalityProfile;
  profileName: string;
  incomingMessage: string;
  recentMessages: Message[];
  examples: TrainingPair[];
}

/**
 * Builds a structured, tone-preserving prompt for Google Gemini.
 */
export function buildPersonalityPrompt({
  profile,
  profileName,
  incomingMessage,
  recentMessages,
  examples,
}: PromptBuilderOptions): string {
  // Extract emojis present in the chat history (incoming message + recent messages)
  const historyEmojis = new Set<string>();
  const emojiRegex = /\p{Extended_Pictographic}/gu;
  
  const allTexts = [
    incomingMessage,
    ...(recentMessages || []).map(m => m.content_text || '')
  ];

  for (const text of allTexts) {
    const matches = text.match(emojiRegex);
    if (matches) {
      for (const emoji of matches) {
        if (!/^[\x00-\x7F]$/.test(emoji)) {
          historyEmojis.add(emoji);
        }
      }
    }
  }

  const allowedEmojis = Array.from(historyEmojis);

  // Format personality details
  const formalityText = profile.formality < 0.3 
    ? 'Extremely casual, uses street slang, ignores standard punctuation' 
    : profile.formality > 0.7 
      ? 'Polite and professional, uses correct grammar and full sentences'
      : 'Semi-casual, friendly, conversational';

  const favoritePhrasesStr = profile.favorite_phrases?.length > 0 
    ? profile.favorite_phrases.join(', ') 
    : 'None specified';

  const greetingsStr = profile.slang_greetings?.length > 0 
    ? profile.slang_greetings.join(', ') 
    : 'None specified';

  let emojisStr = '';
  if (allowedEmojis.length === 0) {
    emojisStr = 'Strictly forbidden. DO NOT use any emojis under any circumstances.';
  } else {
    emojisStr = `Allowed emojis: ${allowedEmojis.join(', ')}. You MUST ONLY use emojis from this allowed list. Do NOT use any other emojis.`;
    
    // Add frequency context for allowed emojis from profile if available
    const profileEmojis = Object.entries(profile.emoji_habits || {})
      .filter(([emoji]) => historyEmojis.has(emoji))
      .map(([emoji, freq]) => `${emoji} (frequent rank ${freq}/5)`);
      
    if (profileEmojis.length > 0) {
      emojisStr += ` Profile preferences for these: ${profileEmojis.join(', ')}.`;
    }
  }

  const languagesStr = profile.languages?.length > 0 
    ? profile.languages.join(', ') 
    : 'English';

  // Format reference examples (Few-shot prompting)
  let examplesText = 'No historical reference examples found. Generate a natural casual reply matching the style description.';
  if (examples.length > 0) {
    examplesText = examples
      .map((ex, idx) => `Example #${idx + 1}:\nIncoming: "${ex.incoming_message}"\n${profileName}'s actual reply: "${ex.reply}"`)
      .join('\n\n');
  }

  // Format active conversation thread context
  let conversationText = 'No previous chat history.';
  if (recentMessages.length > 0) {
    conversationText = recentMessages
      .map(m => {
        const senderLabel = m.sender_type === 'customer' ? 'Customer' : profileName;
        return `${senderLabel}: "${m.content_text || ''}"`;
      })
      .join('\n');
  }

  const emojiInstruction = allowedEmojis.length === 0
    ? 'DO NOT use any emojis under any circumstances. Emojis are strictly prohibited because none have been used in the active conversation thread.'
    : `You may use emojis, but you MUST ONLY use emojis from the allowed list: ${allowedEmojis.join(', ')}. Do NOT use any other emojis. Emulate their frequency and placement naturally if they match the profile preferences.`;

  return `You are acting as the AI double of a real person named "${profileName}".
Your goal is to reply to the customer's incoming message on behalf of ${profileName}.
You MUST match ${profileName}'s exact texting habits, tone, slang, formatting, and emoji style.

--- LINGUISTIC PERSONALITY PROFILE OF ${profileName.toUpperCase()} ---
* Tone / Formality: ${formalityText}
* Preferred Languages: ${languagesStr} (Always reply in this style/mix!)
* Common Openings/Greetings: ${greetingsStr}
* Signature Words/Phrases: ${favoritePhrasesStr}
* Emoji habits: ${emojisStr}
* Typical reply length: around ${profile.average_length || 10} words
* Style Description: ${profile.raw_analysis || 'No summary'}

--- HISTORICAL TEXTING EXAMPLES (Use as primary style guidelines) ---
${examplesText}

--- ACTIVE CONVERSATION THREAD WITH CURRENT CONTACT ---
${conversationText}
Customer: "${incomingMessage}" (Generate ${profileName}'s response to this message)

--- RESPONSE INSTRUCTIONS ---
1. Output ONLY the raw reply text. Do not wrap in quotation marks, do not write "Response:", do not add explanations.
2. Adopt the language mix (e.g. Hinglish) of ${profileName}'s replies. If they use slang like "bhai", "yaar", or "ok", integrate them naturally.
3. Keep the response length close to their typical word length (~${profile.average_length || 10} words).
4. Match their punctuation habits. If they never use full stops (periods) at the end of messages, DO NOT use periods.
5. Emoji rules: ${emojiInstruction}
6. Speak contextually and sincerely. Do NOT sound like an assistant or helper bot.

${profileName}'s Reply:`;
}
