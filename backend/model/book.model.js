const mongoose = require('mongoose');

const defaultBooks = [
  {
    name: 'Harper Lee',
    title: 'To Kill a Mockingbird',
    category: 'Classic Fiction',
    price: 50,
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794',
    description: 'A timeless story about justice, empathy, and growing up in the American South.'
  },
  {
    name: 'George Orwell',
    title: '1984',
    category: 'Dystopian',
    price: 100,
    image: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383',
    description: 'A chilling vision of surveillance, control, and the dangerous cost of obedience.'
  },
  {
    name: 'J.K. Rowling',
    title: 'Harry Potter and the Sorcerer\'s Stone',
    category: 'Fantasy',
    price: 0,
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f',
    description: 'An enchantment-filled adventure introducing Harry to the magical world of Hogwarts.'
  },
  {
    name: 'Yuval Noah Harari',
    title: 'Sapiens: A Brief History of Humankind',
    category: 'Non-Fiction',
    price: 0,
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66',
    description: 'A thought-provoking exploration of how humans evolved and shaped civilization.'
  },
  {
    name: 'Paulo Coelho',
    title: 'The Alchemist',
    category: 'Philosophical Fiction',
    price: 50,
    image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93',
    description: 'A spiritual journey about following your dreams and listening to your heart.'
  },
  {
    name: 'Michelle Obama',
    title: 'Becoming',
    category: 'Biography',
    price: 0,
    image: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383',
    description: 'An inspiring memoir about identity, resilience, and purpose.'
  },
  {
    name: 'Mark Manson',
    title: 'The Subtle Art of Not Giving a F*ck',
    category: 'Self-Help',
    price: 0,
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d',
    description: 'A candid and practical guide to living better by prioritizing what truly matters.'
  },
  {
    name: 'Dan Brown',
    title: 'The Da Vinci Code',
    category: 'Thriller',
    price: 100,
    image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d',
    description: 'A high-stakes mystery weaving art, religion, and conspiracy into a gripping thriller.'
  },
  {
    name: 'Stephen King',
    title: 'The Shining',
    category: 'Horror',
    price: 100,
    image: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383',
    description: 'An eerie and unsettling classic that explores isolation, madness, and fear.'
  },
  {
    name: 'F. Scott Fitzgerald',
    title: 'The Great Gatsby',
    category: 'Classic Fiction',
    price: 50,
    image: 'https://images.unsplash.com/photo-1496104679561-38d6b3b3ef2c',
    description: 'A glittering portrait of ambition, romance, and the illusion of the American Dream.'
  },
  {
    name: 'Homer',
    title: 'The Odyssey',
    category: 'Epic Poetry',
    price: 0,
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765',
    description: 'A legendary voyage filled with adventure, courage, and homecoming.'
  },
  {
    name: 'Margaret Atwood',
    title: 'The Handmaid\'s Tale',
    category: 'Dystopian',
    price: 75,
    image: 'https://images.unsplash.com/photo-1551022372-5c78f2c8c79c',
    description: 'A powerful novel about control, resistance, and the politics of survival.'
  },
  {
    name: 'J.R.R. Tolkien',
    title: 'The Hobbit',
    category: 'Fantasy',
    price: 0,
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66',
    description: 'A delightful quest through Middle-earth with humor, wonder, and bravery.'
  },
  {
    name: 'Ernest Hemingway',
    title: 'The Old Man and the Sea',
    category: 'Classic Fiction',
    price: 60,
    image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93',
    description: 'A moving story of endurance, dignity, and the quiet strength of the human spirit.'
  },
  {
    name: 'Gabriel García Márquez',
    title: 'One Hundred Years of Solitude',
    category: 'Magic Realism',
    price: 0,
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765',
    description: 'A mesmerizing saga of family, memory, and the cyclical nature of time.'
  },
  {
    name: 'Frances Hardinge',
    title: 'The Lie Tree',
    category: 'Young Adult',
    price: 80,
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353',
    description: 'A richly atmospheric mystery exploring science, belief, and female independence.'
  },
  {
    name: 'Miyamoto Musashi',
    title: 'The Book of Five Rings',
    category: 'Philosophy',
    price: 65,
    image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc',
    description: 'A strategic classic on discipline, awareness, and mastery in life and combat.'
  },
  {
    name: 'Jane Austen',
    title: 'Pride and Prejudice',
    category: 'Romance',
    price: 45,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f',
    description: 'A witty and heartfelt novel about love, first impressions, and personal growth.'
  },
  {
    name: 'Virginia Woolf',
    title: 'Mrs Dalloway',
    category: 'Modernist',
    price: 70,
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15',
    description: 'A stream-of-consciousness classic capturing a single day in London with emotional depth.'
  },
  {
    name: 'Agatha Christie',
    title: 'Murder on the Orient Express',
    category: 'Mystery',
    price: 55,
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
    description: 'Detective Hercule Poirot investigates a murder aboard a snowbound train.'
  },
  {
    name: 'Khaled Hosseini',
    title: 'The Kite Runner',
    category: 'Historical Fiction',
    price: 95,
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da',
    description: 'A moving story of friendship, family, and the possibility of redemption.'
  },
  {
    name: 'Marie Curie',
    title: 'Radioactivity',
    category: 'Science',
    price: 0,
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d',
    description: 'An introduction to the discoveries and scientific legacy of Marie Curie.'
  },
  {
    name: 'Eckhart Tolle',
    title: 'The Power of Now',
    category: 'Spirituality',
    price: 0,
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
    description: 'A guide to mindfulness and finding greater presence in everyday life.'
  },
  {
    name: 'Maya Angelou',
    title: 'I Know Why the Caged Bird Sings',
    category: 'Memoir',
    price: 60,
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570',
    description: 'A powerful memoir of resilience, identity, and finding a voice through literature.'
  },
  {
    name: 'Arthur Conan Doyle',
    title: 'The Hound of the Baskervilles',
    category: 'Mystery',
    price: 55,
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794',
    description: "Sherlock Holmes investigates a mysterious family curse on the English moors."
  },
  {
    name: 'Mary Shelley',
    title: 'Frankenstein',
    category: 'Gothic Fiction',
    price: 65,
    image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc',
    description: 'A pioneering gothic novel about ambition, responsibility, and what makes us human.'
  },
  {
    name: 'Chinua Achebe',
    title: 'Things Fall Apart',
    category: 'Historical Fiction',
    price: 70,
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da',
    description: "A landmark novel tracing a community's traditions and transformation."
  },
  {
    name: 'Aldous Huxley',
    title: 'Brave New World',
    category: 'Dystopian',
    price: 75,
    image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d',
    description: 'A classic speculative novel about technology, conformity, and individual freedom.'
  },
  {
    name: 'Louisa May Alcott',
    title: 'Little Women',
    category: 'Classic Fiction',
    price: 50,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f',
    description: 'Four sisters navigate family, ambition, and adulthood in nineteenth-century America.'
  },
  {
    name: 'Octavia E. Butler',
    title: 'Kindred',
    category: 'Science Fiction',
    price: 85,
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765',
    description: 'A modern woman is pulled through time into a history she must confront firsthand.'
  },
  {
    name: 'Tara Westover',
    title: 'Educated',
    category: 'Memoir',
    price: 90,
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66',
    description: 'A memoir about self-invention, education, and finding a place in the world.'
  },
  {
    name: 'Robin Wall Kimmerer',
    title: 'Braiding Sweetgrass',
    category: 'Nature',
    price: 0,
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
    description: 'An invitation to see the natural world through both scientific and Indigenous knowledge.'
  },
  {
    name: 'James Clear',
    title: 'Atomic Habits',
    category: 'Self-Help',
    price: 95,
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d',
    description: 'A practical guide to building lasting habits through small, consistent improvements.'
  },
  {
    name: 'Ray Bradbury',
    title: 'Fahrenheit 451',
    category: 'Science Fiction',
    price: 60,
    image: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383',
    description: 'A fireman begins to question a society that has outlawed books and independent thought.'
  }
];

const bookScheme = mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  image: String,
  title: String,
  description: String,
  featured: { type: Boolean, default: false }
});

const Book = mongoose.model('Book', bookScheme);

module.exports = { Book, defaultBooks };
