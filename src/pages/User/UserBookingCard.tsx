import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { IUserBooking, TBookingCountDown } from "@/types/booking";
import { getTimeRemaining } from "@/utils/getRemainingSlots";
import { ClockIcon } from "lucide-react";
import { useEffect, useState } from "react";
const UserBookingCard = ({ data }: { data: IUserBooking }) => {
  const [countdown, setCountdown] = useState<TBookingCountDown | null>(null);

  useEffect(() => {
    const slotEndTime = new Date(`${data.slot.date}T${data.slot.endTime}`);
    const updateCountdown = () => {
      setCountdown(getTimeRemaining(slotEndTime));
    };

    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, [data]);
  return (
    <Card>
      <CardContent className="flex flex-col gap-4 p-5">
        <h3 className="text-lg font-medium break-words">
          {data?.service?.name}
        </h3>

        <div className="text-sm text-muted-foreground flex-col flex gap-[5px]">
          <p>Date: June 15, 2023</p>
          <p>Time: 2:00 PM</p>
          <div className="flex items-center gap-2 text-muted-foreground shrink-0">
            <ClockIcon className="w-4 h-4" />
            <span>
              {countdown?.days || 0}d {countdown?.hours || 0}h{" "}
              {countdown?.minutes || 0}m {countdown?.seconds || 0}s
            </span>
          </div>
          <Badge
            className={`w-fit`}
            variant={data?.status === "cancel" ? "destructive" : "secondary"}
          >
            {data?.status}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserBookingCard;
