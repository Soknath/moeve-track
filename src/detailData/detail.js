import {
  Card,
  Title,
  AreaChart,
  ColGrid,
  Col,
  Text,
  Metric,
  List,
  ListItem,
  Flex,
  ProgressBar,
} from "@tremor/react";

const chartdata = [
  {
    date: "Jan 22",
    SemiAnalysis: 2890,
    "The Pragmatic Engineer": 2338,
  },
  {
    date: "Feb 22",
    SemiAnalysis: 2756,
    "The Pragmatic Engineer": 2103,
  },
  {
    date: "Mar 22",
    SemiAnalysis: 3322,
    "The Pragmatic Engineer": 2194,
  },
  {
    date: "Apr 22",
    SemiAnalysis: 3470,
    "The Pragmatic Engineer": 2108,
  },
  {
    date: "May 22",
    SemiAnalysis: 3475,
    "The Pragmatic Engineer": 1812,
  },
  {
    date: "Jun 22",
    SemiAnalysis: 3129,
    "The Pragmatic Engineer": 1726,
  },
  {
    date: "Jul 22",
    SemiAnalysis: 3475,
    "The Pragmatic Engineer": 1812,
  },
  {
    date: "Aug 22",
    SemiAnalysis: 3129,
    "The Pragmatic Engineer": 1726,
  },
];

const cities = [
  {
    city: "Athens",
    rating: "2 open PR",
  },
  {
    city: "Luzern",
    rating: "1 open PR",
  },
  {
    city: "Zürich",
    rating: "0 open PR",
  },
  {
    city: "Vienna",
    rating: "1 open PR",
  },
];

const dataFormatter = (number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};

export default () => (
  <div>
    <ColGrid
      numCols={1}
      numColsSm={2}
      numColsLg={4}
      gapX="gap-x-2"
      gapY="gap-y-2"
    >
      <Col numColSpan={1} numColSpanLg={2}>
        <Card>
          <Title>Newsletter revenue over time (USD)</Title>
          <AreaChart
            data={chartdata}
            categories={["SemiAnalysis", "The Pragmatic Engineer"]}
            dataKey="date"
            height="h-40"
            colors={["indigo", "cyan"]}
            valueFormatter={dataFormatter}
            marginTop="mt-4"
          />
        </Card>
      </Col>
      <Col>
        <div className="space-y-2">
          <Card maxWidth="w-full">
            <Flex>
              <Text>$ 9,012 &bull; 45%</Text>
              <Text>$ 20,000</Text>
            </Flex>
            <ProgressBar percentageValue={45} color="teal" marginTop="mt-2" />
          </Card>
          <Card>
            <Text>Title</Text>
            <Metric>KPI 3</Metric>
          </Card>
        </div>
      </Col>
      <Col>
        <Card maxWidth="w-full">
          <Title>Tremor's Hometowns</Title>
          <List>
            {cities.map((item) => (
              <ListItem>
                <span>{item.city}</span>
                <span>{item.rating}</span>
              </ListItem>
            ))}
          </List>
        </Card>
      </Col>
    </ColGrid>
  </div>
);
