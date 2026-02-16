
import React, { useState } from 'react';
import ChatInterface from '../components/ChatInterface';
import { Message } from '../types';
import { getNutritionAdvice } from '../services/geminiService';

type Recipe = {
  id: string;
  title: string;
  time: string;
  tags: string[];
  calories: string;
  protein: string;
  desc: string;
  image: string;
  ingredients: string[];
  steps: string[];
};

const RECIPES: Recipe[] = [
  {
    id: 'power-oats',
    title: 'Power Oats',
    time: '5 mins prep',
    tags: ['Budget', 'High Protein', 'Meal Prep'],
    calories: '≈450 kcal',
    protein: '≈35g protein',
    desc: 'Overnight oats with protein, berries, and chia for steady morning energy.',
    image: 'https://images.unsplash.com/photo-1490371475955-4cb3bfc72f71?auto=format&fit=crop&q=80&w=1200',
    ingredients: [
      '60g oats',
      '250ml milk (or 50/50 milk + water)',
      '150g Greek yogurt (0–2%)',
      '1 scoop protein powder (optional but recommended)',
      '1 tbsp chia seeds',
      'A handful of berries (fresh or frozen)',
      '1 tsp honey (optional)',
    ],
    steps: [
      'Mix oats, milk, yogurt, protein powder, and chia in a jar or bowl.',
      'Refrigerate overnight (or at least 2 hours).',
      'Top with berries and a drizzle of honey before eating.',
    ],
  },
  {
    id: 'lean-tower-bowl',
    title: 'Lean Tower Bowl',
    time: '20 mins',
    tags: ['High Protein', 'Post-Training', 'Simple'],
    calories: '≈550 kcal',
    protein: '≈45g protein',
    desc: 'Chicken, quinoa, roasted greens, and lime. Clean fuel that actually fills you up.',
    image: 'https://images.unsplash.com/photo-1668665771757-4d42737d295a?auto=format&fit=crop&q=80&w=1200',
    ingredients: [
      '150–200g chicken breast',
      '1 microwave quinoa/rice pouch (or 80g cooked)',
      '2 cups mixed greens (broccoli, spinach, peppers)',
      '1 tsp olive oil',
      'Salt + pepper',
      'Lime (or lemon)',
    ],
    steps: [
      'Season and pan-cook chicken until cooked through.',
      'Microwave quinoa/rice and steam or pan-fry the greens.',
      'Build the bowl, drizzle olive oil, and squeeze lime over the top.',
    ],
  },
  {
    id: 'tuna-crunch-salad',
    title: 'Tuna Crunch Salad',
    time: '10 mins',
    tags: ['Budget', 'High Protein', 'No Cook'],
    calories: '≈400 kcal',
    protein: '≈35g protein',
    desc: 'A fast, cheap lunch: tuna + beans + crunch. No cooking, no mess.',
    image: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&q=80&w=1200',
    ingredients: [
      '1 can tuna (in spring water)',
      '1/2 can mixed beans or chickpeas (rinsed)',
      '1/2 cucumber (diced)',
      'A handful of cherry tomatoes (halved)',
      '1/4 red onion (finely sliced)',
      '1 tbsp lemon juice',
      '1 tsp olive oil',
      'Salt + pepper',
    ],
    steps: [
      'Drain tuna and add to a bowl with beans and chopped veg.',
      'Dress with lemon juice, olive oil, salt, and pepper.',
      'Mix well and serve as-is or on top of salad leaves.',
    ],
  },
  {
    id: 'egg-veggie-wrap',
    title: 'Egg & Veggie Wrap',
    time: '10 mins',
    tags: ['Budget', 'High Protein', 'Anytime'],
    calories: '≈450 kcal',
    protein: '≈30g protein',
    desc: 'Fast protein you can make half-asleep. Add hot sauce and go.',
    image: 'https://images.unsplash.com/photo-1636044988136-435a5e54dafe?auto=format&fit=crop&q=80&w=1200',
    ingredients: [
      '2 whole eggs + 2 egg whites (or 3 whole eggs)',
      '1 large tortilla wrap',
      'A handful of spinach',
      '1/2 bell pepper (sliced)',
      'Salt + pepper',
      'Optional: low-fat cheese, salsa, hot sauce',
    ],
    steps: [
      'Scramble eggs and cook with pepper + spinach. Season well.',
      'Warm the wrap for 10 seconds and add the scramble.',
      'Roll tight. Add salsa/hot sauce if you want it aggressive.',
    ],
  },
  {
    id: 'greek-yogurt-pot',
    title: 'Greek Yogurt Protein Pot',
    time: '5 mins',
    tags: ['High Protein', 'No Cook', 'Cheap'],
    calories: '≈350 kcal',
    protein: '≈30g protein',
    desc: 'A high-protein snack that feels like dessert, costs pennies, and keeps you full.',
    image: 'https://images.unsplash.com/photo-1571212515416-fef01fc43637?auto=format&fit=crop&q=80&w=1200',
    ingredients: [
      '250g Greek yogurt (0–2%)',
      '1 banana (sliced)',
      '1 tbsp peanut butter (or powdered PB)',
      '1 tbsp oats or granola',
      'Cinnamon',
    ],
    steps: [
      'Add yogurt to a bowl and stir in cinnamon.',
      'Top with banana, peanut butter, and oats/granola.',
      'Eat immediately or prep in a container for later.',
    ],
  },
  {
    id: 'budget-turkey-chilli',
    title: 'Budget Turkey Chilli',
    time: '30 mins',
    tags: ['Meal Prep', 'High Protein', 'Budget'],
    calories: '≈500 kcal',
    protein: '≈45g protein',
    desc: 'One pot, big portions, high protein. Make once, eat twice (or four times).',
    image: 'https://images.unsplash.com/photo-1629212093570-ff59255e89e0?auto=format&fit=crop&q=80&w=1200',
    ingredients: [
      '500g turkey mince',
      '1 onion (diced)',
      '2 cloves garlic (minced)',
      '1 can chopped tomatoes',
      '1 can kidney beans (rinsed)',
      '1 tbsp chilli powder',
      'Salt + pepper',
    ],
    steps: [
      'Brown turkey mince in a pot, then add onion + garlic.',
      'Add tomatoes, beans, seasoning, and a splash of water.',
      'Simmer 15–20 minutes. Serve with rice, potatoes, or salad.',
    ],
  },
  {
    id: 'lentil-curry',
    title: 'Lentil Curry',
    time: '25 mins',
    tags: ['Budget', 'High Fibre', 'Meat-Free'],
    calories: '≈480 kcal',
    protein: '≈24g protein',
    desc: 'Cheap, filling, and ridiculously easy. A strong option for recovery days.',
    image: 'https://images.unsplash.com/photo-1767114915989-c6ab3c8fc42e?auto=format&fit=crop&q=80&w=1200',
    ingredients: [
      '200g red lentils (rinsed)',
      '1 onion (diced)',
      '1 tbsp curry paste (or curry powder)',
      '400ml light coconut milk (or passata + water)',
      'A handful of spinach',
      'Salt + pepper',
    ],
    steps: [
      'Soften onion in a pot, then stir in curry paste/powder.',
      'Add lentils and coconut milk, then simmer until thick (15–20 mins).',
      'Stir in spinach at the end. Serve with rice or flatbread.',
    ],
  },
  {
    id: 'one-pan-fajitas',
    title: 'One-Pan Chicken Fajitas',
    time: '25 mins',
    tags: ['High Protein', 'One Pan', 'Simple'],
    calories: '≈520 kcal',
    protein: '≈45g protein',
    desc: 'Big flavour, minimal effort. Great for weeknights and meal prep.',
    image: 'https://images.unsplash.com/photo-1689773976415-293dd893f77e?auto=format&fit=crop&q=80&w=1200',
    ingredients: [
      '200g chicken (breast or thigh)',
      '1 onion (sliced)',
      '1–2 peppers (sliced)',
      '1 tbsp fajita seasoning',
      '1 tsp olive oil',
      'Optional: tortillas, salsa, Greek yogurt',
    ],
    steps: [
      'Slice chicken and veg. Toss with oil + fajita seasoning.',
      'Cook in a hot pan until chicken is cooked and veg is tender.',
      'Serve in tortillas or over salad/rice with salsa and yogurt.',
    ],
  },
];

const Nutrition: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [openRecipeId, setOpenRecipeId] = useState<string | null>(null);

  const handleSendMessage = async (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await getNutritionAdvice(text);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-24 px-4 sm:px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-6xl md:text-8xl font-black italic mb-4 uppercase tracking-tighter">
            NUTRITION <span className="text-red-600">HUB</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-medium">
            Fuel your body, feed your potential. Simple, sustainable, and effective nutrition for real life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Chat/Info Area */}
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-zinc-900/50 p-1 border border-zinc-800 rounded-xl overflow-hidden">
              <ChatInterface
                messages={messages}
                onSendMessage={handleSendMessage}
                isLoading={isLoading}
                placeholder="Ask for recipe ideas or meal prep tips..."
                botName="Nutrition Hub AI"
              />
            </div>

            {/* Recipe Ideas Showcase */}
            <section>
              <h2 className="text-3xl font-black uppercase italic mb-8 border-l-4 border-red-600 pl-4">Recipe Ideas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {RECIPES.map((recipe) => {
                  const isOpen = openRecipeId === recipe.id;
                  return (
                    <div key={recipe.id} className="bg-zinc-900 border border-zinc-800 hover:border-red-600/30 transition-all group overflow-hidden">
                      <div className="relative h-44 overflow-hidden">
                        <img
                          src={recipe.image}
                          alt={recipe.title}
                          className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                        <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between gap-3">
                          <h3 className="text-xl font-black uppercase italic leading-tight">{recipe.title}</h3>
                          <span className="text-[10px] bg-red-600/10 text-red-600 px-2 py-1 font-black whitespace-nowrap">{recipe.time}</span>
                        </div>
                      </div>

                      <div className="p-6">
                        <p className="text-zinc-500 text-sm mb-4">{recipe.desc}</p>

                        <div className="flex flex-wrap items-center gap-2 mb-5">
                          <span className="text-[10px] bg-zinc-950 border border-zinc-800 text-zinc-300 px-2 py-1 font-black uppercase tracking-widest">{recipe.calories}</span>
                          <span className="text-[10px] bg-zinc-950 border border-zinc-800 text-zinc-300 px-2 py-1 font-black uppercase tracking-widest">{recipe.protein}</span>
                          {recipe.tags.map((tag) => (
                            <span key={tag} className="text-[10px] bg-red-600/10 text-red-600 px-2 py-1 font-black uppercase tracking-widest">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <button
                          type="button"
                          aria-expanded={isOpen}
                          onClick={() => setOpenRecipeId((prev) => (prev === recipe.id ? null : recipe.id))}
                          className="text-xs font-black uppercase tracking-widest text-zinc-400 group-hover:text-red-600 transition-colors"
                        >
                          {isOpen ? 'Hide Recipe ↑' : 'View Full Recipe →'}
                        </button>

                        {isOpen && (
                          <div className="mt-6 pt-6 border-t border-zinc-800 space-y-6">
                            <div>
                              <h4 className="text-red-600 font-black uppercase text-xs mb-3">Ingredients</h4>
                              <ul className="space-y-2 text-zinc-400 text-sm list-disc list-inside">
                                {recipe.ingredients.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="text-red-600 font-black uppercase text-xs mb-3">Steps</h4>
                              <ol className="space-y-2 text-zinc-400 text-sm list-decimal list-inside">
                                {recipe.steps.map((step) => (
                                  <li key={step}>{step}</li>
                                ))}
                              </ol>
                              <p className="text-zinc-600 text-[11px] mt-4">
                                Macros are approximate and depend on brands + portions.
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            <div className="bg-zinc-900 p-8 border-t-4 border-red-600">
              <h3 className="text-xl font-bold mb-6 uppercase italic">Meal Prepping Tips</h3>
              <ul className="space-y-6">
                <li className="group">
                  <h4 className="text-red-600 font-black text-xs uppercase mb-1">Batch Cook Proteins</h4>
                  <p className="text-zinc-400 text-sm">Cook 1-2kg of protein at once to save hours during the week.</p>
                </li>
                <li className="group">
                  <h4 className="text-red-600 font-black text-xs uppercase mb-1">The Three-S Rule</h4>
                  <p className="text-zinc-400 text-sm">Simple, Scalable, Sustainable. If you can't prep it in 30 mins, simplify it.</p>
                </li>
                <li className="group">
                  <h4 className="text-red-600 font-black text-xs uppercase mb-1">Track with Sheets</h4>
                  <p className="text-zinc-400 text-sm">Use our custom <span className="text-white font-bold underline">Google Sheets</span> to plan your week and stay on track.</p>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 p-8 border border-zinc-800 relative group overflow-hidden">
              <div className="relative z-10 text-center">
                <h3 className="text-xl font-bold mb-2 uppercase italic">Need a Custom Plan?</h3>
                <p className="text-zinc-500 text-sm mb-6">Our AI is friendly, knowledgeable, and ready to help you find what works for YOU.</p>
                <div className="inline-block px-8 py-3 bg-red-600 text-white font-black uppercase text-xs tracking-widest skew-x-[-12deg]">
                  <span className="inline-block skew-x-[12deg]">Ask our Lead AI</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=1000"
              alt="Meal Prep"
              className="w-full h-64 object-cover grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;
