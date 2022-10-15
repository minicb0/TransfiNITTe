import 'package:flutter/material.dart';
import 'package:placements/pages/home/admin_home.dart';
import 'package:placements/pages/home/student_home.dart';
import 'package:placements/pages/signup.dart';
import 'package:syncfusion_flutter_charts/charts.dart';

TooltipBehavior? _tooltipBehavior;

class Stats extends StatelessWidget {
  const Stats({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const StatsPage(),
    );
  }
}

class StatsPage extends StatefulWidget {
  const StatsPage({Key? key}) : super(key: key);
  @override
  State<StatsPage> createState() => StatsPageState();
}

class StatsPageState extends State<StatsPage> {
  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 2,
      child: Scaffold(
        appBar: AppBar(
          title: const Text("Statistics"),
          centerTitle: true,
        ),
        body: Center(
        child: Container(
          height: 300,
          width: 300,
          child: SfCartesianChart(
            primaryXAxis: CategoryAxis(),
            // Chart title
            title: ChartTitle(text: 'Half yearly sales analysis'),
            // Enable legend
            legend: Legend(isVisible: true),
            // Enable tooltip
            tooltipBehavior: _tooltipBehavior,

            series: <LineSeries<SalesData, String>>[
              LineSeries<SalesData, String>(
                dataSource:  <SalesData>[
                  SalesData('Jan', 35),
                  SalesData('Feb', 28),
                  SalesData('Mar', 34),
                  SalesData('Apr', 32),
                  SalesData('May', 40)
                ],
                xValueMapper: (SalesData sales, _) => sales.year,
                yValueMapper: (SalesData sales, _) => sales.sales,
                // Enable data label
                dataLabelSettings: DataLabelSettings(isVisible: true)
              )
            ]
          )
        )
      ),
      ),
    );
  }
}

class SalesData {
  SalesData(this.year, this.sales);
  final String year;
  final double sales;
}
