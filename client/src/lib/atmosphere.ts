/* IZURE — Atmospheric image catalog */
export const IMG = {
  hero_bar: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1800&q=80',
  hero_smoke: 'https://images.unsplash.com/photo-1551776235-dde6d482980b?w=1800&q=80',
  hero_window: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1800&q=80',
  hero_street: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=1800&q=80',
  hero_espresso: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=1800&q=80',
  hero_record: 'https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=1800&q=80',
  hero_leather: 'https://images.unsplash.com/photo-1542708993627-b6e5bbae43c4?w=1800&q=80',
  hero_velvet: 'https://images.unsplash.com/photo-1551069613-1904dbdcda11?w=1800&q=80',
  hero_jazz: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?w=1800&q=80',
  hero_neon: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=1800&q=80',

  ref_doom: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=900&q=80',
  ref_fleet: 'https://images.unsplash.com/photo-1461784121038-f088ca1e7714?w=900&q=80',
  ref_zztop: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=900&q=80',
  ref_pino: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80',
  ref_bourdain: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=80',
  ref_camus: 'https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=900&q=80',
  ref_matthew: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=900&q=80',
  ref_rusty: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=900&q=80',

  mat_linen: 'https://images.unsplash.com/photo-1604147495798-57beb5d6af73?w=600&q=80',
  mat_brass: 'https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=600&q=80',
  mat_leather: 'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=600&q=80',
  mat_vinyl: 'https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=600&q=80',
  mat_velvet: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80',
  mat_marble: 'https://images.unsplash.com/photo-1517511620798-cec17d428bc0?w=600&q=80',
  mat_silver: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80',
  mat_smoke: 'https://images.unsplash.com/photo-1530819568329-97653eafbbfa?w=600&q=80',

  mood_typewriter: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80',
  mood_books: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=1200&q=80',
  mood_pasta: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=1200&q=80',
  mood_window: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=80',
  mood_record2: 'https://images.unsplash.com/photo-1535992165812-68d1861aa71e?w=1200&q=80',
  mood_alley: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&q=80',
  mood_glass: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1200&q=80',
  mood_film: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&q=80',

  priv_backroom: 'https://images.unsplash.com/photo-1538488881038-e252a119ace7?w=1800&q=80',
  priv_cards: 'https://images.unsplash.com/photo-1541278107931-e006523892df?w=1200&q=80',
  priv_books: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200&q=80',
  priv_newspaper: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&q=80',
  priv_glass2: 'https://images.unsplash.com/photo-1568644396922-5c3bfae12521?w=1200&q=80',

  about_portrait: 'https://images.unsplash.com/photo-1542178243-bc20204b769f?w=1400&q=80',
  about_desk: 'https://images.unsplash.com/photo-1499914485622-a88fac536970?w=1400&q=80',
} as const;

export type ImageKey = keyof typeof IMG;
