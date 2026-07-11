You are a senior software architect, senior Next.js engineer, senior Node.js backend engineer, senior AI engineer, senior PostgreSQL database architect, and senior UI/UX designer.

Your job is NOT to build a new application.

Your job is to transform my existing production-ready WhatsApp CRM into an AI Personal Communication Platform while preserving every existing feature.

====================================================

CURRENT PROJECT

====================================================

Project Name:
Sampark Desk

Current Stack

Frontend
- Next.js 16 App Router
- TypeScript
- TailwindCSS
- shadcn/ui
- Supabase Auth
- Supabase Realtime

Backend

- Node.js
- whatsapp-web.js
- Puppeteer

Database

- Supabase PostgreSQL
- RLS
- Realtime

Already Existing Features

✔ WhatsApp Connection
✔ QR Authentication
✔ Shared Inbox
✔ Contact Management
✔ Pipelines
✔ Deals
✔ Broadcast
✔ Automation Engine
✔ Dashboard
✔ Notes
✔ Assignments
✔ Real-time Messaging

DO NOT REMOVE
DO NOT BREAK
DO NOT REWRITE

Everything currently working must continue working.

====================================================

PROJECT GOAL

====================================================

Transform the CRM into an AI Communication Platform capable of learning a person's messaging style from WhatsApp chat exports and replying like that person.

The AI should imitate:

- tone
- vocabulary
- emoji habits
- response length
- greetings
- closings
- punctuation
- language
- slang
- personality

This should feel like a commercial SaaS product rather than a hackathon prototype.

====================================================

CORE PRINCIPLE

====================================================

Existing CRM remains intact.

AI becomes a completely new module.

Architecture should remain modular.

Every AI component should be isolated.

No spaghetti code.

No duplicate logic.

====================================================

NEW MODULES

====================================================

Create a completely new sidebar section

AI Assistant

Containing

Dashboard

Upload Training Data

Training Jobs

Personality Profile

Knowledge Base

Testing Playground

Reply Logs

Settings

Analytics

====================================================

FEATURE 1

CHAT IMPORTER

====================================================

Allow user to upload

WhatsApp exported TXT file

Support

single chat

group chat

without media

large files

Requirements

Drag & Drop

Upload Progress

Validation

Parsing status

Success

Failure

Store original upload.

====================================================

FEATURE 2

CHAT PARSER

====================================================

Create a robust parser.

It must

Detect timestamps

Detect sender

Merge multiline messages

Ignore

deleted messages

missed calls

system messages

media omitted

encryption notices

Extract

timestamp

sender

message

reply chain

conversation boundaries

Normalize text.

====================================================

FEATURE 3

TRAINING DATASET

====================================================

Convert chat into

Incoming Message

↓

User Reply

pairs.

Generate

thousands of training examples.

Store

incoming_message

reply

timestamp

contact

conversation_id

message_before

message_after

language

====================================================

FEATURE 4

PERSONALITY ANALYZER

====================================================

After upload

analyze entire chat.

Generate

Average reply length

Average delay

Emoji usage

Most common emojis

Vocabulary richness

Frequently used phrases

Greetings

Closings

Humor level

Sarcasm level

Formality

Language mix

English %

Hindi %

Gujarati %

Hinglish %

Question frequency

Exclamation usage

Caps usage

Typing style

Preferred punctuation

Average sentence count

Store all results.

====================================================

FEATURE 5

PERSONALITY PROFILE

====================================================

Generate a reusable personality profile.

Example

Friendly

Casual

Uses "bhai"

Uses laughing emoji

Usually replies in 8-15 words

Rarely uses full stops

Often asks questions back

Show profile visually.

====================================================

FEATURE 6

VECTOR DATABASE

====================================================

Use pgvector.

Generate embeddings for

incoming messages

Store embeddings.

Implement

semantic similarity search

top K retrieval

cosine similarity

====================================================

FEATURE 7

CONTEXT RETRIEVAL

====================================================

When a new message arrives

Retrieve

most similar historical conversations

recent conversation history

contact information

knowledge base

personality profile

Combine all into context.

====================================================

FEATURE 8

PROMPT BUILDER

====================================================

Build prompts dynamically.

Never hardcode prompts.

Prompt should include

Personality

Language

Writing style

Retrieved examples

Current conversation

Business knowledge

Reply constraints

Generate structured prompts.

====================================================

FEATURE 9

AI REPLY ENGINE

====================================================

Generate replies.

Requirements

Natural

Human

Context aware

Tone matching

Emotion matching

Never sound robotic.

====================================================

FEATURE 10

TEST PLAYGROUND

====================================================

Allow user to type

any message

Generate AI reply

Show

confidence

retrieved memories

reasoning

personality match

latency

token usage

====================================================

FEATURE 11

AUTO REPLY

====================================================

Modes

OFF

Suggest

Approval Required

Automatic

Auto Send

Integrate into existing inbox.

====================================================

FEATURE 12

LIVE WHATSAPP

====================================================

When message arrives

Receive

↓

AI

↓

Generate draft

↓

Approval

↓

Send

OR

Auto send

====================================================

FEATURE 13

CONTACT PERSONALITIES

====================================================

Detect relationship.

Examples

Friend

Boss

Family

Customer

Lead

Unknown

Adjust replies accordingly.

====================================================

FEATURE 14

RESPONSE DELAY

====================================================

Simulate human delay.

Delay based on

reply length

reading time

time of day

typing speed

Show typing indicator.

====================================================

FEATURE 15

KNOWLEDGE BASE

====================================================

Allow user to upload

PDF

TXT

Markdown

Website

FAQs

Business docs

Use RAG.

====================================================

FEATURE 16

EMAIL IMPORT

====================================================

Allow importing

Gmail replies

Use as additional personality data.

====================================================

FEATURE 17

AI SETTINGS

====================================================

Temperature

Creativity

Reply length

Emoji level

Formality

Auto send

Language

Model

Delay

====================================================

FEATURE 18

AI DASHBOARD

====================================================

Show

Messages generated

Approval rate

Average confidence

Average latency

Response time

Tokens

Model cost

Most common phrases

Emoji chart

Language chart

====================================================

FEATURE 19

REPLY LOGS

====================================================

Store

Prompt

Retrieved memories

Reply

Edited version

Final version

Latency

Model

Tokens

====================================================

FEATURE 20

FEEDBACK LOOP

====================================================

When user edits AI reply

Store

AI reply

Edited reply

Difference

Improve future generations.

====================================================

FEATURE 21

SAFETY

====================================================

Never automatically send

Passwords

OTP

Bank details

Sensitive info

Medical advice

Detect sensitive messages.

Require approval.

====================================================

FEATURE 22

DATABASE

====================================================

Create migrations.

New tables

training_uploads

training_messages

training_pairs

personality_profiles

contact_profiles

embeddings

knowledge_base

knowledge_chunks

reply_logs

feedback

ai_settings

prompt_history

training_jobs

====================================================

FEATURE 23

BACKGROUND JOBS

====================================================

Long operations

must run asynchronously.

Examples

Embedding generation

Training

Chunking

Analysis

Progress tracking.

====================================================

FEATURE 24

API DESIGN

====================================================

Create clean APIs.

REST.

Typed.

Versioned.

Proper validation.

Proper error handling.

====================================================

FEATURE 25

UI

====================================================

Professional SaaS.

Apple-level polish.

Smooth animations.

Loading states.

Skeletons.

Dark mode.

Responsive.

====================================================

FEATURE 26

CODE QUALITY

====================================================

Use

SOLID

Clean Architecture

Dependency Injection

Repository Pattern

Services

Reusable hooks

Server Actions where appropriate

Proper typing

No duplicated code

====================================================

FEATURE 27

PERFORMANCE

====================================================

Streaming responses

Caching

Pagination

Virtualized lists

Background processing

Optimistic updates

====================================================

FEATURE 28

SECURITY

====================================================

RLS

Input validation

Rate limiting

Sanitization

Auth guards

Permission system

====================================================

FEATURE 29

OBSERVABILITY

====================================================

Logging

Error tracking

Performance metrics

Retry logic

====================================================

FEATURE 30

DOCUMENTATION

====================================================

For every feature

Generate

Architecture

Folder structure

Database migration

API documentation

Component documentation

Flow diagrams

====================================================

IMPORTANT

====================================================

Never replace existing CRM features.

Only extend.

Every feature should integrate naturally into the CRM.

Every module should be production ready.

Every function should be typed.

Every database change should have migrations.

Every API should have validation.

Every UI should be polished.

Never write placeholder code.

Never leave TODOs.

Never use mock data.

Build like this product will be used by thousands of users.

Think like a senior engineer at Linear, Vercel, Notion, or Stripe.

Before implementing each feature, explain the architecture, files to create, database changes, APIs, UI flow, and integration points, then generate the production-ready code.