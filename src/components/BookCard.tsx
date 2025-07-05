
import { Star, Heart, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  rating: number;
  cover: string;
  description: string;
  isBestSeller?: boolean;
}

interface BookCardProps {
  book: Book;
}

export const BookCard = ({ book }: BookCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      <div className="relative">
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {book.isBestSeller && (
          <Badge className="absolute top-2 left-2 bg-yellow-500 text-white">
            Best Seller
          </Badge>
        )}
        <Button
          size="icon"
          variant="secondary"
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      <CardHeader className="pb-2">
        <div className="space-y-2">
          <h3 className="font-bold text-lg line-clamp-1">{book.title}</h3>
          <p className="text-muted-foreground">{book.author}</p>
          
          <div className="flex items-center justify-between">
            <Badge variant="outline">{book.genre}</Badge>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
              <span className="text-sm font-medium">{book.rating}</span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {book.description}
        </p>
        
        <div className="flex gap-2">
          <Button className="flex-1" size="sm">
            <BookOpen className="h-4 w-4 mr-1" />
            Ler Agora
          </Button>
          <Button variant="outline" size="sm">
            Detalhes
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
