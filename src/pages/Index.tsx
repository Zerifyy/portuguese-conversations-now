import { BookOpen, Star, Heart, Search, Mail, Phone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { BookCard } from "@/components/BookCard";

const bestSellerBooks = [
  {
    id: 1,
    title: "O Alquimista",
    author: "Paulo Coelho",
    genre: "Ficção",
    rating: 4.8,
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
    description: "Uma jornada de autodescoberta que mudou milhões de vidas",
    isBestSeller: true
  },
  {
    id: 2,
    title: "Dom Casmurro",
    author: "Machado de Assis",
    genre: "Literatura Clássica",
    rating: 4.6,
    cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
    description: "Um clássico da literatura brasileira sobre ciúme e amor",
    isBestSeller: true
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    genre: "Distopia",
    rating: 4.9,
    cover: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=300&h=400&fit=crop",
    description: "Uma visão aterrorizante do futuro totalitário",
    isBestSeller: true
  },
  {
    id: 4,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "História",
    rating: 4.7,
    cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
    description: "Uma breve história da humanidade",
    isBestSeller: true
  },
  {
    id: 5,
    title: "O Pequeno Príncipe",
    author: "Antoine de Saint-Exupéry",
    genre: "Infantil",
    rating: 4.8,
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop",
    description: "Uma fábula poética sobre amizade e amor",
    isBestSeller: true
  },
  {
    id: 6,
    title: "Cem Anos de Solidão",
    author: "Gabriel García Márquez",
    genre: "Realismo Mágico",
    rating: 4.5,
    cover: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=300&h=400&fit=crop",
    description: "Uma saga familiar épica na América Latina",
    isBestSeller: true
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <BookOpen className="mx-auto mb-6 h-16 w-16" />
          <h1 className="text-5xl font-bold mb-4">Biblioteca Digital</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Descubra milhares de livros, desde clássicos atemporais até os últimos best sellers
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input 
              placeholder="Buscar livros, autores ou gêneros..." 
              className="pl-10 py-3 text-lg"
            />
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="h-8 w-8 text-yellow-500 fill-current" />
            <h2 className="text-3xl font-bold">Best Sellers Recomendados</h2>
            <Star className="h-8 w-8 text-yellow-500 fill-current" />
          </div>
          <p className="text-muted-foreground text-lg">
            Os livros mais populares e bem avaliados da nossa biblioteca
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bestSellerBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">50,000+</CardTitle>
                <CardDescription>Livros Disponíveis</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">25+</CardTitle>
                <CardDescription>Gêneros Literários</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">100,000+</CardTitle>
                <CardDescription>Leitores Ativos</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section for Authors */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <BookOpen className="mx-auto mb-6 h-12 w-12" />
            <h2 className="text-3xl font-bold mb-4">Você é um Autor?</h2>
            <p className="text-lg mb-8">
              Gostaria de adicionar seu livro à nossa biblioteca digital? Entre em contato conosco!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader className="text-center">
                  <Mail className="mx-auto mb-2 h-8 w-8" />
                  <CardTitle className="text-white">E-mail</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90">autores@bibliotecadigital.com</p>
                  <Button 
                    variant="secondary" 
                    className="mt-4 w-full"
                    onClick={() => window.location.href = 'mailto:autores@bibliotecadigital.com'}
                  >
                    Enviar E-mail
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader className="text-center">
                  <Phone className="mx-auto mb-2 h-8 w-8" />
                  <CardTitle className="text-white">Telefone</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90">(11) 9999-8888</p>
                  <Button 
                    variant="secondary" 
                    className="mt-4 w-full"
                    onClick={() => window.location.href = 'tel:+5511999998888'}
                  >
                    Ligar Agora
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-white/5 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Requisitos para Submissão</h3>
              <ul className="text-left space-y-2 max-w-2xl mx-auto">
                <li>• Obra original e inédita ou com direitos autorais em dia</li>
                <li>• Sinopse detalhada do livro</li>
                <li>• Biografia do autor</li>
                <li>• Arquivo do livro em formato PDF ou EPUB</li>
                <li>• Capa em alta resolução</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
