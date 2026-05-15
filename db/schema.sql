-- ============================================================
-- Brisa Women's Foundation — Database Schema
-- ============================================================

-- Site settings: hero, mission text, stats, pillars, CTAs etc.
CREATE TABLE IF NOT EXISTS site_settings (
  key         VARCHAR(150) PRIMARY KEY,
  value       TEXT,
  updated_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Events
CREATE TABLE IF NOT EXISTS events (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title            VARCHAR(255) NOT NULL,
  description      TEXT,
  date             TIMESTAMPTZ NOT NULL,
  end_date         TIMESTAMPTZ,
  location         VARCHAR(255),
  image_url        TEXT,
  registration_url TEXT,
  is_featured      BOOLEAN DEFAULT FALSE,
  status           VARCHAR(50) DEFAULT 'upcoming', -- upcoming | ongoing | past
  created_at       TIMESTAMPTZ DEFAULT NOW(),
  updated_at       TIMESTAMPTZ DEFAULT NOW()
);

-- Gallery images
CREATE TABLE IF NOT EXISTS gallery_images (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  url           TEXT NOT NULL,
  thumbnail_url TEXT,
  caption       TEXT,
  alt_text      TEXT,
  category      VARCHAR(100) DEFAULT 'General', -- album/tag name, e.g. "Market Support Imo 2025"
  sort_order    INTEGER DEFAULT 0,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

-- Impact stories / testimonials
CREATE TABLE IF NOT EXISTS impact_stories (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name        VARCHAR(255),
  story       TEXT,
  image_url   TEXT,
  location    VARCHAR(255),
  is_featured BOOLEAN DEFAULT FALSE,
  sort_order  INTEGER DEFAULT 0,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Admin users
CREATE TABLE IF NOT EXISTS admin_users (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email         VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name          VARCHAR(255),
  role          VARCHAR(50) DEFAULT 'editor', -- admin | editor
  last_login    TIMESTAMPTZ,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

-- Blog posts
CREATE TABLE IF NOT EXISTS blog_posts (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title        VARCHAR(255) NOT NULL,
  slug         VARCHAR(255) UNIQUE NOT NULL,
  excerpt      TEXT,
  content      TEXT,
  image_url    TEXT,
  author       VARCHAR(255),
  published    BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMPTZ,
  created_at   TIMESTAMPTZ DEFAULT NOW(),
  updated_at   TIMESTAMPTZ DEFAULT NOW()
);

-- Newsletter subscribers
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email          VARCHAR(255) UNIQUE NOT NULL,
  subscribed_at  TIMESTAMPTZ DEFAULT NOW(),
  active         BOOLEAN DEFAULT TRUE
);

-- ============================================================
-- Seed: Default site settings
-- ============================================================
INSERT INTO site_settings (key, value) VALUES
  ('hero_title',              'On a mission to empower women of all ages.'),
  ('hero_subtitle',           'Brisa Women''s Foundation brings first-world woman empowerment to local women and children across Africa — one community at a time.'),
  ('hero_image_url',          'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=2000&q=80'),
  ('hero_cta_text',           'Partner With Us'),
  ('hero_cta_url',            'https://dashboard.flutterwave.com/donate/obcebpoam3cu'),
  ('hero_secondary_cta_text', 'Learn More'),
  ('hero_secondary_cta_url',  '/about'),

  ('mission_title',      'Meet Brisa Women''s Foundation'),
  ('mission_body',       'The empowerment of women is a cause understood all over the world but not quite everyone is for it or has access to it — especially not the common women in Nigeria. Brisa Women''s Foundation aims to bring first-world woman empowerment to local women and children. The major focus is small-town rural areas, engaging women and children through education, counselling, and providing the support they need to stand on their own despite societal pressures.'),
  ('mission_image_url',  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80'),

  ('stat_1_number', '500+'),
  ('stat_1_label',  'Women Empowered'),
  ('stat_2_number', '50+'),
  ('stat_2_label',  'Communities Reached'),
  ('stat_3_number', '200+'),
  ('stat_3_label',  'Scholarships Granted'),
  ('stat_4_number', '12+'),
  ('stat_4_label',  'Years of Impact'),

  ('pillar_1_title', 'Empowerment'),
  ('pillar_1_body',  'We engage in youth and women empowerment programs, vocational training, skill acquisition and career talks, and offer educational scholarships to less privileged children.'),
  ('pillar_2_title', 'Encouragement'),
  ('pillar_2_body',  'We support aged people, build and finance old people''s homes, support motherless and orphanage homes, and contribute to the development of the elderly.'),
  ('pillar_3_title', 'Enlightenment'),
  ('pillar_3_body',  'We run parenting seminars and workshops that increase parents'' knowledge, skills, confidence, and sense of empowerment in the parenting role.'),

  ('cta_title',    'Join Us in Changing Lives'),
  ('cta_body',     'Every contribution — whether time, resources, or funds — helps us reach more women and children across Africa and beyond.'),
  ('donate_url',   'https://dashboard.flutterwave.com/donate/obcebpoam3cu'),
  ('volunteer_url','https://brisafoundation.com.ng/volunteer'),

  ('about_hero_title', 'Driven by Purpose, Guided by Compassion'),
  ('about_hero_body',  'We believe every woman deserves the opportunity to reach her full potential, regardless of where she was born.'),
  ('about_story',      '1 in 6 women live below the poverty line — and we are on a mission to change that. Founded in Lagos, Nigeria, Brisa Women''s Foundation is expanding its reach across Africa and the world, building a movement of empowered women who lift their communities.'),

  ('contact_address', 'Lagos, Nigeria'),
  ('contact_phone',   '+2348183929999'),
  ('contact_email',   'info@brisafoundation.com.ng'),

  ('footer_tagline',  'Bringing first-world woman empowerment to local women and children across Africa and beyond.'),

  ('social_facebook',  'https://facebook.com/brisawomensfoundation'),
  ('social_twitter',   'https://twitter.com/brisawomenfoundation'),
  ('social_instagram', 'https://instagram.com/brisa_women_foundation'),
  ('social_youtube',   'https://youtube.com/brisawomenfoundation')
ON CONFLICT (key) DO NOTHING;

-- ============================================================
-- Seed: Featured impact story
-- ============================================================
INSERT INTO impact_stories (name, story, location, is_featured, sort_order) VALUES
  (
    'Mrs. Khole',
    'Mrs. Khole is a widow with 5 children. She lives in Ikorodu, Lagos, Nigeria, and her children had been out of school for a long period of time. Brisa Foundation reached out to her and provided a grant which she invested in her grocery business. Today, Mrs. Khole''s business is thriving and her children are back in school doing very well.',
    'Ikorodu, Lagos, Nigeria',
    TRUE,
    1
  )
ON CONFLICT DO NOTHING;

-- ============================================================
-- Seed: Sample gallery images (Unsplash placeholders)
-- ============================================================
INSERT INTO gallery_images (url, alt_text, category, sort_order) VALUES
  ('https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=600&q=80', 'Women empowerment session', 'empowerment', 1),
  ('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80', 'Community gathering', 'community', 2),
  ('https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=600&q=80', 'Children education', 'education', 3),
  ('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80', 'Skills training workshop', 'empowerment', 4),
  ('https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80', 'Community outreach', 'community', 5),
  ('https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=600&q=80', 'Team meeting', 'general', 6)
ON CONFLICT DO NOTHING;
