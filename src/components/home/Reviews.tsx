import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, StarIcon } from "lucide-react";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const RatingBar = ({
  rating,
  count,
  total,
}: {
  rating: number | string;
  count: number;
  total: number;
}) => (
  <div className="flex items-center gap-2">
    <div className="w-8 text-sm font-medium">{rating}.0</div>
    <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
      <div
        className="h-full bg-primaryMat"
        style={{ width: `${(count / total) * 100}%` }}
      />
    </div>
    <div className="w-20 text-sm text-muted-foreground">{count}K reviews</div>
  </div>
);

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        className={`w-4 h-4 ${
          star <= rating ? "text-primaryMat fill-primaryMat" : "text-primaryMat"
        }`}
      />
    ))}
  </div>
);

const Review = ({
  name,
  rating,
  date,
  comment,
}: {
  name: string;
  rating: number;
  date: string;
  comment: string;
}) => (
  <div className="py-6 border-t border-border">
    <div className="flex items-center gap-4 mb-2">
      <Avatar className="w-10 h-10">
        <AvatarImage
          src={`https://api.dicebear.com/6.x/initials/svg?seed=${name}`}
        />
        <AvatarFallback>
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <div>
        <div className="font-semibold">{name}</div>
        <div className="text-sm text-muted-foreground">{date}</div>
      </div>
      <div className="ml-auto flex items-center">
        <StarRating rating={rating} />
        <span className="ml-2 font-semibold">{rating}.0</span>
      </div>
    </div>
    <p className="mb-4">{comment}</p>
  </div>
);

export default function Component() {
  const totalReviews = 35.8;
  const ratings = [
    { rating: 5, count: 14 },
    { rating: 4, count: 6 },
    { rating: 3, count: 4 },
    { rating: 2, count: 0.8 },
    { rating: 1, count: 9 },
  ];

  return (
    <div className="layout_container py-[40px] flex gap-[20px]">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Reviews</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-start gap-8 mb-8">
            <div className="text-5xl font-bold">4.0</div>
            <div className="flex-1">
              {ratings.map((item) => (
                <RatingBar
                  key={item.rating}
                  rating={item.rating}
                  count={item.count}
                  total={totalReviews}
                />
              ))}
            </div>
            <div className="text-sm text-right">
              <div>5.0 14K reviews</div>
              <div>4.0 6K reviews</div>
              <div>3.0 4K reviews</div>
              <div>2.0 800 reviews</div>
              <div>1.0 9K reviews</div>
            </div>
          </div>

          <Review
            name="Alexander Rity"
            rating={5}
            date="4 months ago"
            comment="Easy booking, great value! Cozy rooms at a reasonable price in Sheffield's vibrant center. Surprisingly quiet with nearby Traveller's accommodations. Highly recommended!"
          />
          <Review
            name="Emma Crieght"
            rating={4}
            date="4 months ago"
            comment="Effortless booking, unbeatable affordability! Small yet comfortable rooms in the heart of Sheffield's nightlife hub. Surrounded by elegant housing, it's a peaceful gem. Thumbs up!"
          />
          <Button variant="link" className="mt-4 w-full text-primary">
            Read all reviews
          </Button>
        </CardContent>
      </Card>
      <div className="bg-muted px-6 py-8 sm:px-10 sm:py-10 w-[40%]">
        <h3 className="text-xl font-bold mb-4">Write a Review</h3>
        <form className="grid gap-4">
          <div className="flex items-center">
            <Label htmlFor="rating" className="mr-4">
              Rating:
            </Label>
            <div className="flex items-center">
              <StarIcon className="w-6 h-6 fill-primaryMat stroke-primaryMat mr-1 cursor-pointer" />
              <StarIcon className="w-6 h-6 fill-primaryMat stroke-primaryMat mr-1 cursor-pointer" />
              <StarIcon className="w-6 h-6 fill-primaryMat stroke-primaryMat mr-1 cursor-pointer" />
              <StarIcon className="w-6 h-6 fill-none stroke-primaryMat mr-1 cursor-pointer" />
              <StarIcon className="w-6 h-6 fill-none stroke-primaryMat cursor-pointer" />
            </div>
          </div>
          <div>
            <Label htmlFor="feedback" className="mb-2">
              Feedback:
            </Label>
            <Textarea
              id="feedback"
              placeholder="Share your thoughts and experiences..."
              className="w-full rounded-lg border-2 border-muted focus:border-primary focus:ring-primary"
              rows={4}
            />
          </div>
          <Button type="submit" className="justify-self-end bg-primaryMat">
            Submit Review
          </Button>
        </form>
      </div>
    </div>
  );
}
