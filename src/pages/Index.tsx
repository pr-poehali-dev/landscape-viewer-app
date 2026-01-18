import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

type FilterType = 'all' | 'mountains' | 'sea' | 'forest' | 'fields';
type SeasonFilter = 'all' | 'spring' | 'summer' | 'autumn' | 'winter';
type TimeFilter = 'all' | 'sunrise' | 'day' | 'sunset' | 'night';

interface Landscape {
  id: number;
  title: string;
  image: string;
  type: FilterType;
  season: SeasonFilter;
  time: TimeFilter;
}

const landscapes: Landscape[] = [
  {
    id: 1,
    title: 'Горный рассвет',
    image: 'https://cdn.poehali.dev/projects/1f4bcdc3-daf7-47a3-aa36-2a622209f22b/files/ca984f89-47f6-4724-830c-47b7b53f7a1f.jpg',
    type: 'mountains',
    season: 'winter',
    time: 'sunrise'
  },
  {
    id: 2,
    title: 'Закат на океане',
    image: 'https://cdn.poehali.dev/projects/1f4bcdc3-daf7-47a3-aa36-2a622209f22b/files/8e1dc57c-c564-433f-8594-308c5366a836.jpg',
    type: 'sea',
    season: 'summer',
    time: 'sunset'
  },
  {
    id: 3,
    title: 'Летний лес',
    image: 'https://cdn.poehali.dev/projects/1f4bcdc3-daf7-47a3-aa36-2a622209f22b/files/1ecf5e39-8777-40c5-a0c8-f9ea9175d3b6.jpg',
    type: 'forest',
    season: 'summer',
    time: 'day'
  },
  {
    id: 4,
    title: 'Альпийские вершины',
    image: 'https://cdn.poehali.dev/projects/1f4bcdc3-daf7-47a3-aa36-2a622209f22b/files/ca984f89-47f6-4724-830c-47b7b53f7a1f.jpg',
    type: 'mountains',
    season: 'spring',
    time: 'day'
  },
  {
    id: 5,
    title: 'Побережье на рассвете',
    image: 'https://cdn.poehali.dev/projects/1f4bcdc3-daf7-47a3-aa36-2a622209f22b/files/8e1dc57c-c564-433f-8594-308c5366a836.jpg',
    type: 'sea',
    season: 'autumn',
    time: 'sunrise'
  },
  {
    id: 6,
    title: 'Осенний лес',
    image: 'https://cdn.poehali.dev/projects/1f4bcdc3-daf7-47a3-aa36-2a622209f22b/files/1ecf5e39-8777-40c5-a0c8-f9ea9175d3b6.jpg',
    type: 'forest',
    season: 'autumn',
    time: 'day'
  },
  {
    id: 7,
    title: 'Золотые поля',
    image: 'https://cdn.poehali.dev/projects/1f4bcdc3-daf7-47a3-aa36-2a622209f22b/files/7b275330-2b0e-4323-87f2-37d712a19d7f.jpg',
    type: 'fields',
    season: 'summer',
    time: 'sunset'
  },
  {
    id: 8,
    title: 'Северное сияние',
    image: 'https://cdn.poehali.dev/projects/1f4bcdc3-daf7-47a3-aa36-2a622209f22b/files/436cd12d-c10a-4d30-9234-29ab0e264cb6.jpg',
    type: 'mountains',
    season: 'winter',
    time: 'night'
  },
  {
    id: 9,
    title: 'Весенний луг',
    image: 'https://cdn.poehali.dev/projects/1f4bcdc3-daf7-47a3-aa36-2a622209f22b/files/b295a15f-15fe-411e-84f2-f1624d49e926.jpg',
    type: 'fields',
    season: 'spring',
    time: 'day'
  },
  {
    id: 10,
    title: 'Осенняя тропа',
    image: 'https://cdn.poehali.dev/projects/1f4bcdc3-daf7-47a3-aa36-2a622209f22b/files/9fb84bdf-03f9-4594-b134-65c55cd47743.jpg',
    type: 'forest',
    season: 'autumn',
    time: 'sunrise'
  },
  {
    id: 11,
    title: 'Тропический рай',
    image: 'https://cdn.poehali.dev/projects/1f4bcdc3-daf7-47a3-aa36-2a622209f22b/files/59e58988-8ba2-4799-8223-6ca7880e0b1d.jpg',
    type: 'sea',
    season: 'summer',
    time: 'day'
  },
  {
    id: 12,
    title: 'Вечерний океан',
    image: 'https://cdn.poehali.dev/projects/1f4bcdc3-daf7-47a3-aa36-2a622209f22b/files/8e1dc57c-c564-433f-8594-308c5366a836.jpg',
    type: 'sea',
    season: 'spring',
    time: 'sunset'
  }
];

const Index = () => {
  const [typeFilter, setTypeFilter] = useState<FilterType>('all');
  const [seasonFilter, setSeasonFilter] = useState<SeasonFilter>('all');
  const [timeFilter, setTimeFilter] = useState<TimeFilter>('all');

  const filteredLandscapes = landscapes.filter(landscape => {
    return (
      (typeFilter === 'all' || landscape.type === typeFilter) &&
      (seasonFilter === 'all' || landscape.season === seasonFilter) &&
      (timeFilter === 'all' || landscape.time === timeFilter)
    );
  });

  const typeFilters = [
    { value: 'all' as FilterType, label: 'Все', icon: 'Globe' },
    { value: 'mountains' as FilterType, label: 'Горы', icon: 'Mountain' },
    { value: 'sea' as FilterType, label: 'Море', icon: 'Waves' },
    { value: 'forest' as FilterType, label: 'Лес', icon: 'Trees' },
    { value: 'fields' as FilterType, label: 'Поля', icon: 'Wheat' }
  ];

  const seasonFilters = [
    { value: 'all' as SeasonFilter, label: 'Все сезоны', icon: 'CalendarDays' },
    { value: 'spring' as SeasonFilter, label: 'Весна', icon: 'Flower2' },
    { value: 'summer' as SeasonFilter, label: 'Лето', icon: 'Sun' },
    { value: 'autumn' as SeasonFilter, label: 'Осень', icon: 'Leaf' },
    { value: 'winter' as SeasonFilter, label: 'Зима', icon: 'Snowflake' }
  ];

  const timeFilters = [
    { value: 'all' as TimeFilter, label: 'Любое время', icon: 'Clock' },
    { value: 'sunrise' as TimeFilter, label: 'Рассвет', icon: 'Sunrise' },
    { value: 'day' as TimeFilter, label: 'День', icon: 'Sun' },
    { value: 'sunset' as TimeFilter, label: 'Закат', icon: 'Sunset' },
    { value: 'night' as TimeFilter, label: 'Ночь', icon: 'Moon' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/10">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Галерея Пейзажей
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Исследуйте красоту природы через коллекцию потрясающих пейзажей со всего мира
          </p>
        </header>

        <div className="mb-8 space-y-6 animate-scale-in">
          <div className="backdrop-blur-xl bg-card/50 border border-border/50 rounded-2xl p-6 shadow-xl">
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Filter" size={20} className="text-primary" />
              <h3 className="font-semibold text-sm uppercase tracking-wide">Тип пейзажа</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {typeFilters.map(filter => (
                <Badge
                  key={filter.value}
                  variant={typeFilter === filter.value ? 'default' : 'outline'}
                  className={`cursor-pointer transition-all duration-300 px-4 py-2 text-sm font-medium ${
                    typeFilter === filter.value
                      ? 'bg-gradient-to-r from-primary to-secondary shadow-lg scale-105'
                      : 'hover:scale-105 hover:border-primary/50'
                  }`}
                  onClick={() => setTypeFilter(filter.value)}
                >
                  <Icon name={filter.icon as any} size={16} className="mr-2" />
                  {filter.label}
                </Badge>
              ))}
            </div>
          </div>

          <div className="backdrop-blur-xl bg-card/50 border border-border/50 rounded-2xl p-6 shadow-xl">
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Calendar" size={20} className="text-secondary" />
              <h3 className="font-semibold text-sm uppercase tracking-wide">Сезон</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {seasonFilters.map(filter => (
                <Badge
                  key={filter.value}
                  variant={seasonFilter === filter.value ? 'default' : 'outline'}
                  className={`cursor-pointer transition-all duration-300 px-4 py-2 text-sm font-medium ${
                    seasonFilter === filter.value
                      ? 'bg-gradient-to-r from-secondary to-primary shadow-lg scale-105'
                      : 'hover:scale-105 hover:border-secondary/50'
                  }`}
                  onClick={() => setSeasonFilter(filter.value)}
                >
                  <Icon name={filter.icon as any} size={16} className="mr-2" />
                  {filter.label}
                </Badge>
              ))}
            </div>
          </div>

          <div className="backdrop-blur-xl bg-card/50 border border-border/50 rounded-2xl p-6 shadow-xl">
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Clock" size={20} className="text-accent" />
              <h3 className="font-semibold text-sm uppercase tracking-wide">Время суток</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {timeFilters.map(filter => (
                <Badge
                  key={filter.value}
                  variant={timeFilter === filter.value ? 'default' : 'outline'}
                  className={`cursor-pointer transition-all duration-300 px-4 py-2 text-sm font-medium ${
                    timeFilter === filter.value
                      ? 'bg-gradient-to-r from-accent to-primary shadow-lg scale-105'
                      : 'hover:scale-105 hover:border-accent/50'
                  }`}
                  onClick={() => setTimeFilter(filter.value)}
                >
                  <Icon name={filter.icon as any} size={16} className="mr-2" />
                  {filter.label}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {filteredLandscapes.length === 0 ? (
          <div className="text-center py-20 animate-fade-in">
            <Icon name="Search" size={64} className="mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-2xl font-semibold mb-2">Ничего не найдено</h3>
            <p className="text-muted-foreground">Попробуйте изменить фильтры</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLandscapes.map((landscape, index) => (
              <div
                key={landscape.id}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={landscape.image}
                    alt={landscape.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-white mb-2">{landscape.title}</h3>
                  <div className="flex gap-2">
                    <Badge className="bg-primary/90 backdrop-blur-sm">
                      <Icon name="MapPin" size={14} className="mr-1" />
                      {typeFilters.find(f => f.value === landscape.type)?.label}
                    </Badge>
                    <Badge className="bg-secondary/90 backdrop-blur-sm">
                      <Icon name="Calendar" size={14} className="mr-1" />
                      {seasonFilters.find(f => f.value === landscape.season)?.label}
                    </Badge>
                    <Badge className="bg-accent/90 backdrop-blur-sm">
                      <Icon name="Clock" size={14} className="mr-1" />
                      {timeFilters.find(f => f.value === landscape.time)?.label}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 text-center text-muted-foreground animate-fade-in">
          <p>Найдено пейзажей: {filteredLandscapes.length} из {landscapes.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Index;