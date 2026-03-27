import { useState } from 'react';
import { useAppContext } from '../common/store';

export const DateLab = () => {
  const { dateIdeas } = useAppContext();
  const [filter, setFilter] = useState('All');

  const filters = ['All', 'Home', 'Outdoor', 'Budget', 'Luxury'];

  const filteredIdeas = dateIdeas.filter(idea => {
    if(filter === 'All') return true;
    if(filter === 'Budget') return idea.budget === 'Free' || idea.budget === '$';
    if(filter === 'Luxury') return idea.budget === '$$' || idea.budget === '$$$';
    if(filter === 'Home') return idea.location === 'Home';
    if(filter === 'Outdoor') return idea.location === 'Outdoor';
    return true;
  });

  return (
    <main className="max-w-screen-2xl mx-auto px-6 md:px-12 pt-8 pb-32">
      <section className="mb-16">
        <div className="max-w-3xl">
          <h2 className="font-headline text-[2.75rem] font-extrabold tracking-tight leading-tight text-primary mb-4">Date Lab</h2>
          <p className="font-body text-lg text-on-surface-variant leading-relaxed opacity-80">
            Curation of intentional moments. Design your next memory through curated experiences meant for connection.
          </p>
        </div>
      </section>

      <section className="mb-12 overflow-x-auto">
        <div className="flex gap-3 pb-2">
          {filters.map(f => {
            const isActive = filter === f;
            return (
              <button 
                key={f}
                onClick={() => setFilter(f)}
                className={`px-8 py-2.5 rounded-full font-semibold text-sm transition-all focus:outline-none 
                ${isActive ? 'bg-primary text-on-primary shadow-md' : 'bg-surface-container-low text-on-surface-variant font-medium hover:bg-surface-container-high'}`}
              >
                {f}
              </button>
            )
          })}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        {filteredIdeas.map((idea, idx) => {
          // just assigning some beautiful placeholder images from the original html based on index
          const images = [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBdY_qFPYIsjf1UEm6k86XkG-IS71he0VFO6mVUM4YbldFSEQbS9hbgTNKkYkj1PSch5Ul2GJQW6zYzJCa4z6QI3YJG6XD2yngDSeGdOWn8SQ-K1FAFbN6cls54RKt49gyEh6Hz3qjDkyBDxRv-wDCCVupXrv8ZiPyO0AsJZHENcgdsZ0BlidzYoYGd3-XFz_rThXRlvNVxEvavxqW17acWceFLY3Jp_bveKqH_KfvkdzAdaghwL-TvaupQnVepj8x5XO9Ca2Ui-Ldb",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAKPP9L_9IDxkLbWarGOfw7yXnomOZlmbIFFoKTSSgW8hVc7vSS6xicyy1HgIu6Hay9nkPjJ444ss5fp6MPxG0jzQlcuvBQq7YSHVU0ps-qJkHxpUu6oQCZfQ0ZES0TTw_rqaKkOZayZZPvI6kKrC9t1HMfEbQ3XYIm5yOpI2zT097eQdiQq1VdBO-HiiFK48V5GQzQGxx4gH-18dLL6Y0TfLhWAKiM7JB_fddyhH-k3SiAcRiqFrAXge6zuDpCWOxma_Ir9oSOxWU1",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCaRvWtYsYFA2ewaTlZxj9-5Iz6bdPcYCq9b0QSZ4IU6tp82-Gm0HeOoavJJs6v8PH2HPiy6vZaLxI1zusLrbeabHNZ3c39zEXYl_06aguR8gcuC_9atJjsSMpkSjnsNH1etSJjYi4--T1axM6kKupGQ4kTPqHpKyLk-CGyHkgxlz2YQmezxZ2fikYvlOjjKmCnWh-PihAR0YAmcunAx72FNai6fbnE7SJWYmczC4Q6QkebnJdvkXstJ-BwN_Pj6XuhyfeMF1A17-vt",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDxCr6Mm7AE-59cBMTcsB50rKDTxYqCVevCG_MjvjrFmhDQ1i36gAjtYU8lZjdUwCZiBX6v-TdeGgDaGDTxcw4vv_zQKqo6PUJOg7pptjsi5-qAhpsUICqzlsTXYzsW0kgqMqF5XrjQaCaShcYOO8_UnxJm8xqWro_kmIcsMzbEIhT5fGZaMmc6nDVzF_UuoWFjuC6_ugkdO29JeKbSBN5PNWKGk6n_8YJakA4e3f_U3fuarXdbOlYDJ3wgQ4Nrq9J1J90nNFF4tN0M"
          ];
          const imageSrc = images[idx % images.length];

          return (
            <div key={idea.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 bg-surface-container-low">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={imageSrc}/>
                <div className="absolute top-6 right-6">
                  <span className="bg-surface-container-lowest/80 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-primary uppercase tracking-widest leading-none">
                    {idea.location}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-headline text-xl font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">{idea.title}</h3>
                  <p className="text-on-surface-variant text-sm flex items-center gap-2">
                    <span className="material-symbols-outlined text-[1rem]">schedule</span> {idea.mood}
                  </p>
                </div>
                <span className="font-headline font-bold text-primary text-lg">{idea.budget}</span>
              </div>
            </div>
          )
        })}
      </section>
    </main>
  );
};
