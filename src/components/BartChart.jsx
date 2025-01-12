"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { getRandomColor } from "@/lib/color";

export default function BarChartLabel({ label, chartData, dataKey }) {
  const color = getRandomColor();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart - Label</CardTitle>
        <CardDescription>Sales Data: January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={{}}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="monthYear"
              tickLine={false}
              fontSize={13}
              tickMargin={10}
              axisLine={false}
              minTickGap={0}
              tickFormatter={(value) => value}
            />
            <YAxis type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey={dataKey} fill={color} radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={14}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="leading-none text-muted-foreground">{label}</div>
      </CardFooter>
    </Card>
  );
}
