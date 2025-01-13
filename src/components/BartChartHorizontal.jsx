import { Bar, BarChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

import { getRandomColor } from "@/lib/color"

export default function BarChartHorizontal({ label, chartData, dataKey}) {
  var color = getRandomColor()
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart - Horizontal</CardTitle>
        <CardDescription>Item Quantities</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={{}}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <XAxis type="number" dataKey={dataKey.key} hide />
            <YAxis
              dataKey={dataKey.label}
              type="category"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => {
                const split = value.split(" ")
                if (split.length > 2) {
                  return `${split.slice(0, 2).join(" ")}...`
                }
                return value            
              }}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey={dataKey.key} fill={color} radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          {label}
        </div>
      </CardFooter>
    </Card>
  )
}
