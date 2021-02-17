(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{383:function(t,a,s){"use strict";s.r(a);var e=s(43),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"alerts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#alerts"}},[t._v("#")]),t._v(" Alerts")]),t._v(" "),s("p",[t._v("AWS CloudWatch collects metrics and logs from your application & infrastructure. You can configure "),s("a",{attrs:{href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("alarms"),s("OutboundLink")],1),t._v(" based on AWS' built-in metrics, "),s("a",{attrs:{href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("custom metrics your app reports to CloudWatch"),s("OutboundLink")],1),t._v(", forecasts (powered by machine learning), or a combination of all three. These alarms can trigger alerts in OpsGenie.")]),t._v(" "),s("p",[t._v("The available metrics vary between AWS products, and most products should have a section in their documentation that explains what metrics are available. For example, "),s("a",{attrs:{href:"https://docs.aws.amazon.com/lambda/latest/dg/monitoring-metrics.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lambda has metrics"),s("OutboundLink")],1),t._v(" for invocations, run time, and concurrent executions.")]),t._v(" "),s("p",[t._v("Beyond alerting, alarms are used to trigger auto-scaling up & down when certain conditions are met. You can attach several actions to an alarm: if auto-scaling is triggered, you can "),s("em",[t._v("also")]),t._v(" send an OpsGenie alert at the same time.")]),t._v(" "),s("h2",{attrs:{id:"alerting-to-opsgenie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#alerting-to-opsgenie"}},[t._v("#")]),t._v(" Alerting to OpsGenie")]),t._v(" "),s("p",[t._v("CloudWatch alarms can be dispatched to an SNS topic, which can make API calls. The OpsGenie API supports automatic approval to receive data from SNS by way of its "),s("a",{attrs:{href:"https://docs.opsgenie.com/docs/aws-cloudwatch-integration",target:"_blank",rel:"noopener noreferrer"}},[t._v("AWS integration"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("The EACD-CloudOps team sets up and maintains the SNS topics. They are terraformed as part of the shared account resource IaC module, and the ARNs are published as outputs.")]),t._v(" "),s("p",[t._v("If you need your OpsGenie team set up, contact EACD-CloudOps. You will need to provide a contact with admin rights to the team so they can add the AWS CloudWatch integration and provide the URL & API key.")]),t._v(" "),s("p",[t._v("Once set up, you just provide the SNS topic ARN in the "),s("code",[t._v("alarm_actions")]),t._v(". It is recommended to have a flag you can set to disable all of your application's alerts.")]),t._v(" "),s("p",[t._v("Here is an example module that alerts when there are >0 failed steps in an AWS Step Function.")]),t._v(" "),s("div",{staticClass:"language-hcl extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hcl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("variable"),s("span",{pre:!0,attrs:{class:"token type variable"}},[t._v(' "alert_on_failure" ')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("description")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Whether or not CloudWatch should send alerts via OpsGenie."')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("data "),s("span",{pre:!0,attrs:{class:"token type variable"}},[t._v('"terraform_remote_state"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"shared_resources"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("backend")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s3"')]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("config")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("bucket")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" var.account_resources_state_bucket\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("key")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" var.account_resources_state_file\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("region")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" var.account_resources_state_region\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("resource "),s("span",{pre:!0,attrs:{class:"token type variable"}},[t._v('"aws_cloudwatch_event_target"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app_runner_target"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("rule")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" aws_cloudwatch_event_rule.app_runner_rule.name\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("arn")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" aws_sfn_state_machine.runner_step_function.id\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("role_arn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" aws_iam_role.step_function_role.arn\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("resource "),s("span",{pre:!0,attrs:{class:"token type variable"}},[t._v('"aws_cloudwatch_metric_alarm"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"failed_executions_alarm"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("alarm_name")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyFunction-'),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token type variable"}},[t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v('-ExecutionsFailed"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("comparison_operator")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GreaterThanThreshold"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("evaluation_periods")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("metric_name")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ExecutionsFailed"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("namespace")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AWS/States"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("period")]),t._v("              "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"120"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("statistic")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Sum"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("threshold")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("alarm_description")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Monitors for MyFunction '),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token type variable"}},[t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(' step function errors."')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("treat_missing_data")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ignore"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("actions_enabled")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" var.alert_on_failure\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("alarm_actions")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("data.terraform_remote_state.shared_resources.outputs.opsgenie_team_sns_arns.eacd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("dimensions")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("StateMachineArn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" aws_sfn_state_machine.runner_step_function.id\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);