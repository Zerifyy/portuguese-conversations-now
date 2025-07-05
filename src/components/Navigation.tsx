
import { useState } from "react";
import { BookOpen, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Badge } from "@/components/ui/badge";

const genres = [
  "Ficção", "Romance", "Mistério", "Fantasia", "Ficção Científica",
  "Terror", "Literatura Clássica", "História", "Biografia", "Autoajuda",
  "Negócios", "Ciência", "Filosofia", "Poesia", "Drama",
  "Aventura", "Thriller", "Distopia", "Realismo Mágico", "Infantil",
  "Jovem Adulto", "Não-ficção", "Ensaios", "Crônicas", "Contos"
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">Babilônia</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base">
                    Gêneros Literários
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-96 p-4">
                      <h3 className="font-semibold mb-3 text-lg">Explore por Gênero</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {genres.map((genre) => (
                          <NavigationMenuLink key={genre} asChild>
                            <Button
                              variant="ghost"
                              className="justify-start h-auto p-2 hover:bg-muted"
                              onClick={() => console.log(`Navegar para ${genre}`)}
                            >
                              <Badge variant="outline" className="mr-2">
                                {genre}
                              </Badge>
                            </Button>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button variant="ghost">Novidades</Button>
            <Button variant="ghost">Mais Lidos</Button>
            <Button variant="ghost">Autores</Button>
            <Button>Minha Biblioteca</Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-6 w-6 text-primary" />
                    <span className="text-lg font-bold">Babilônia</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-3">Gêneros Literários</h3>
                    <div className="grid grid-cols-1 gap-2 max-h-64 overflow-y-auto">
                      {genres.map((genre) => (
                        <Button
                          key={genre}
                          variant="ghost"
                          className="justify-start"
                          onClick={() => {
                            console.log(`Navegar para ${genre}`);
                            setIsOpen(false);
                          }}
                        >
                          {genre}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 pt-4 border-t">
                    <Button variant="ghost" className="w-full justify-start">
                      Novidades
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      Mais Lidos
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      Autores
                    </Button>
                    <Button className="w-full">
                      Minha Biblioteca
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
