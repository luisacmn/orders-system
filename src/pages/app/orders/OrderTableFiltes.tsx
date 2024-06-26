import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, X } from "lucide-react";

export function OrderTableFiltes() {
  return (
    <form className="flex items-center gap-2">
      <span className="text-sm font-semibold">Filters:</span>
      <Input placeholder="Order ID" className="h-8 w-[320px]" />
      <Input placeholder="Client Name" className="h-8 w-[320px]" />
      <Select defaultValue="all">
        <SelectTrigger className="h-8 w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All status</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="canceled">Canceled</SelectItem>
          <SelectItem value="processing">Processing</SelectItem>
          <SelectItem value="delivering">Delivering</SelectItem>
          <SelectItem value="delivered">Delivered</SelectItem>
        </SelectContent>
      </Select>
      <Button variant="secondary" size="xs" type="submit">
        <Search className="mr-2 h-4 w-4" />
        Filter results
      </Button>
      <Button variant="outline" size="xs" type="button">
        <X className="mr-2 h-4 w-4" />
        Remove filters
      </Button>
    </form>
  );
}
