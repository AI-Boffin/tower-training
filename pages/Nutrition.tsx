
import React, { useState } from 'react';

const asset = (fileName: string) => encodeURI(`/Tower Test/${fileName}`);

type Recipe = {
  id: string;
  title: string;
  time: string;
  tags: string[];
  calories: string;
  protein: string;
  desc: string;
  ingredients: string[];
  steps: string[];
};

type Tip = {
  title: string;
  copy: string;
};

type ShoppingGroup = {
  label: string;
  items: string[];
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
  {
    id: 'salmon-traybake',
    title: 'Salmon Traybake',
    time: '25 mins',
    tags: ['High Protein', 'Omega-3', 'One Tray'],
    calories: '≈560 kcal',
    protein: '≈38g protein',
    desc: 'Salmon, potatoes, and veg on one tray. Minimal mess and solid recovery food.',
    ingredients: [
      '1 salmon fillet',
      '250g baby potatoes',
      '1-2 handfuls green veg',
      '1 tsp olive oil',
      'Salt, pepper, garlic powder',
      'Lemon wedge',
    ],
    steps: [
      'Halve the potatoes, season, and roast for 15 minutes at 200C.',
      'Add salmon and veg to the tray with a little oil and seasoning.',
      'Bake for another 10-12 minutes, then finish with lemon.',
    ],
  },
  {
    id: 'beef-rice-skillet',
    title: 'Beef & Rice Skillet',
    time: '20 mins',
    tags: ['High Protein', 'Post-Training', 'Meal Prep'],
    calories: '≈620 kcal',
    protein: '≈42g protein',
    desc: 'Lean beef, rice, spinach, and seasoning. Fast, filling, and easy to repeat.',
    ingredients: [
      '200g lean beef mince',
      '1 microwave rice pouch',
      '1 handful spinach',
      '1/2 onion (diced)',
      '1 tsp smoked paprika',
      'Salt + pepper',
    ],
    steps: [
      'Brown the mince with onion and seasoning.',
      'Stir through the rice and spinach until heated through.',
      'Taste, season again, and box up extra portions if needed.',
    ],
  },
  {
    id: 'cottage-cheese-bagel',
    title: 'Cottage Cheese Bagel',
    time: '5 mins',
    tags: ['Quick', 'High Protein', 'Breakfast'],
    calories: '≈390 kcal',
    protein: '≈32g protein',
    desc: 'Bagel, cottage cheese, fruit, and a bit of crunch. A fast breakfast that actually keeps you full.',
    ingredients: [
      '1 plain bagel',
      '150g cottage cheese',
      '1 portion berries or sliced apple',
      'Cinnamon',
      'Optional: drizzle of honey',
    ],
    steps: [
      'Toast the bagel if you want extra texture.',
      'Spread over the cottage cheese and top with fruit.',
      'Add cinnamon and honey if needed, then eat straight away.',
    ],
  },
  {
    id: 'chicken-pasta-pot',
    title: 'Chicken Pasta Pot',
    time: '20 mins',
    tags: ['High Protein', 'Simple', 'Family Friendly'],
    calories: '≈610 kcal',
    protein: '≈45g protein',
    desc: 'Chicken, pasta, tomato sauce, and spinach. Straightforward food that works hard.',
    ingredients: [
      '180-200g chicken breast',
      '75-100g dry pasta',
      '150g tomato passata',
      '1 handful spinach',
      '1 tsp olive oil',
      'Garlic, chilli flakes, salt, pepper',
    ],
    steps: [
      'Cook the pasta while the chicken cooks in a separate pan.',
      'Slice the chicken, add passata and seasoning, then stir in spinach.',
      'Combine with pasta and adjust portions to fit your target.',
    ],
  },
];

const FOUNDATION_RULES: Tip[] = [
  {
    title: 'Protein First',
    copy: 'Build each meal around a proper protein source so hunger stays under control and recovery keeps moving.',
  },
  {
    title: 'Repeat Winners',
    copy: 'Use a short list of meals you actually enjoy. Consistency beats chasing novelty every day.',
  },
  {
    title: 'Plan Busy Days',
    copy: 'Have quick defaults ready for the nights where motivation is low and time is tight.',
  },
  {
    title: 'Keep It Honest',
    copy: 'Most people stall from mindless extras, not from the main meals. Watch snacks, drinks, and portions.',
  },
];

const MEAL_PREP_TIPS: Tip[] = [
  {
    title: 'Cook protein twice weekly',
    copy: 'A Sunday prep and a midweek top-up stops the week from drifting.',
  },
  {
    title: 'Use one carb base',
    copy: 'Rice, potatoes, wraps, pasta, or oats. Keep it simple and buy enough of it.',
  },
  {
    title: 'Build meals in boxes',
    copy: 'Protein, carb, veg, sauce. If it fits in that structure, it will probably work.',
  },
  {
    title: 'Stock emergency meals',
    copy: 'Tuna, eggs, microwave rice, frozen veg, Greek yogurt, and wraps cover most bad days.',
  },
];

const DAILY_CHECKLIST: Tip[] = [
  {
    title: '25-40g protein per meal',
    copy: 'Aim for three or four protein-focused meals every day.',
  },
  {
    title: 'Fruit or veg with each main meal',
    copy: 'It keeps quality high without turning meals into a punishment.',
  },
  {
    title: 'Hydrate before you snack',
    copy: 'A lot of low-energy eating is just poor hydration and routine.',
  },
  {
    title: 'Keep one meal lighter',
    copy: 'A lighter meal gives you room if the rest of the day gets messy.',
  },
];

const SHOPPING_LIST: ShoppingGroup[] = [
  {
    label: 'Proteins',
    items: ['Chicken, turkey mince, eggs', 'Greek yogurt, cottage cheese, tuna', 'Protein powder if convenience matters'],
  },
  {
    label: 'Carbs',
    items: ['Oats, rice, pasta, wraps', 'Potatoes and microwave rice pouches', 'Fruit for quick energy and recovery'],
  },
  {
    label: 'Extras',
    items: ['Frozen veg and salad bags', 'Olive oil, herbs, hot sauce, salsa', 'Beans, lentils, and low-effort sauces'],
  },
];

const Nutrition: React.FC = () => {
  const [openRecipeId, setOpenRecipeId] = useState<string | null>(null);

  return (
    <div className="min-h-screen pt-24 pb-24 px-4 sm:px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-6xl md:text-8xl font-black italic mb-4 uppercase tracking-tighter">
            NUTRITION <span className="text-red-600">HUB</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-medium">
            Fuel your body, feed your potential. Simple, sustainable, and effective nutrition for real life.
          </p>
        </div>

        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <div className="overflow-hidden bg-zinc-900 border border-zinc-800">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative min-h-[320px]">
                    <img
                      src={asset('protein heaven.jpeg')}
                      alt="High-protein nutrition spread"
                      loading="eager"
                      className="site-media-tone absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <p className="text-zinc-300 uppercase tracking-[0.35em] text-xs font-black">Tower Nutrition</p>
                      <h2 className="text-3xl md:text-4xl font-black italic mt-2">
                        PROTEIN HEAVEN. <span className="text-red-600">SHAKES ARE EASY PROTEIN BOOSTS.</span>
                      </h2>
                    </div>
                  </div>

                  <div className="p-8 md:p-10">
                    <p className="text-zinc-500 uppercase tracking-[0.35em] text-xs font-black mb-4">Nutrition Playbook</p>
                    <h3 className="text-3xl font-black italic mb-4">Just a system that works.</h3>
                    <p className="text-zinc-400 leading-relaxed mb-8">
                      Keep meals simple, repeat the ones that fit your life, and make high-protein defaults easy to reach for.
                      Good nutrition does not need to be complicated. It needs to be honest and repeatable.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {FOUNDATION_RULES.map((tip) => (
                        <div key={tip.title} className="bg-zinc-950 border border-zinc-800 p-4">
                          <p className="text-red-600 font-black uppercase text-xs tracking-[0.25em] mb-2">{tip.title}</p>
                          <p className="text-zinc-400 text-sm leading-relaxed">{tip.copy}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="bg-zinc-900 p-8 border-t-4 border-red-600">
                <h3 className="text-xl font-bold mb-6 uppercase italic">Meal Prepping Tips</h3>
                <ul className="space-y-6">
                  {MEAL_PREP_TIPS.map((tip) => (
                    <li key={tip.title}>
                      <h4 className="text-red-600 font-black text-xs uppercase mb-1">{tip.title}</h4>
                      <p className="text-zinc-400 text-sm">{tip.copy}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-zinc-950 border border-zinc-800 p-8">
                <h3 className="text-xl font-bold mb-6 uppercase italic">Daily Checklist</h3>
                <div className="space-y-5">
                  {DAILY_CHECKLIST.map((item) => (
                    <div key={item.title}>
                      <p className="text-white font-black uppercase text-xs tracking-[0.25em] mb-2">{item.title}</p>
                      <p className="text-zinc-500 text-sm">{item.copy}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-12">
            <section>
              <h2 className="text-3xl font-black uppercase italic mb-8 border-l-4 border-red-600 pl-4">Recipe Ideas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {RECIPES.map((recipe) => {
                  const isOpen = openRecipeId === recipe.id;
                  return (
                    <div key={recipe.id} className="bg-zinc-900 border border-zinc-800 hover:border-red-600/30 transition-all group overflow-hidden">
                      <div className="h-1 bg-gradient-to-r from-red-600 via-red-600/40 to-transparent" />
                      <div className="p-6">
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <h3 className="text-xl font-black uppercase italic leading-tight">{recipe.title}</h3>
                          <span className="text-[10px] bg-red-600/10 text-red-600 px-2 py-1 font-black whitespace-nowrap">{recipe.time}</span>
                        </div>
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

          <div className="lg:col-span-4 space-y-8">
            <div className="bg-zinc-900 border border-zinc-800 p-8">
              <h3 className="text-xl font-bold mb-6 uppercase italic">Simple Shopping List</h3>
              <div className="space-y-6">
                {SHOPPING_LIST.map((group) => (
                  <div key={group.label}>
                    <h4 className="text-red-600 font-black text-xs uppercase mb-3 tracking-[0.25em]">{group.label}</h4>
                    <ul className="space-y-2 text-zinc-400 text-sm">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden bg-zinc-950 border border-zinc-800">
              <div className="relative h-72">
                <img
                  src={asset('protein heaven.jpeg')}
                  alt="Protein-focused meal prep"
                  loading="lazy"
                  className="site-media-tone absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-zinc-300 uppercase tracking-[0.35em] text-xs font-black">Keep It Simple</p>
                  <p className="mt-2 text-lg font-black italic">
                    Three solid breakfasts, three easy lunches, three dependable dinners. That is enough to make progress.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 p-8">
              <h3 className="text-xl font-bold mb-6 uppercase italic">What Actually Works</h3>
              <div className="space-y-4 text-zinc-400 text-sm leading-relaxed">
                <p>Eat enough protein to recover, enough carbs to train well, and enough vegetables to keep the basics in place.</p>
                <p>Do not overcomplicate weekends, nights out, or the odd imperfect meal. Tighten the routine, not your life.</p>
                <p>When progress slows, adjust portions or consistency first. You usually do not need a brand-new plan.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;
