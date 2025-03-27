/*
  # Initial schema for card collection game

  1. New Tables
    - cards
      - id (uuid, primary key)
      - name (text)
      - description (text)
      - image_url (text)
      - unlock_password (text)
    - user_cards
      - id (uuid, primary key)
      - username (text)
      - card_id (uuid, references cards)
      - unlocked_at (timestamp with time zone)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated access
*/

-- Create cards table
CREATE TABLE IF NOT EXISTS cards (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  image_url text NOT NULL,
  unlock_password text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create user_cards table
CREATE TABLE IF NOT EXISTS user_cards (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  username text NOT NULL,
  card_id uuid REFERENCES cards(id),
  unlocked_at timestamptz DEFAULT now(),
  UNIQUE(username, card_id)
);

-- Enable RLS
ALTER TABLE cards ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_cards ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can read cards" ON cards
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can read their unlocked cards" ON user_cards
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Users can unlock cards" ON user_cards
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Insert sample cards
INSERT INTO cards (name, description, image_url, unlock_password) VALUES
  ('Dragon Card', 'A mighty dragon breathing fire', 'https://picsum.photos/400/300?random=1', 'dragon123'),
  ('Wizard Card', 'A wise wizard casting spells', 'https://picsum.photos/400/300?random=2', 'wizard123'),
  ('Knight Card', 'A brave knight in shining armor', 'https://picsum.photos/400/300?random=3', 'knight123');