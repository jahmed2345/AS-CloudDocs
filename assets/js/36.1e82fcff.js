(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{390:function(t,e,a){"use strict";a.r(e);var s=a(43),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"fargate-for-ecs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fargate-for-ecs"}},[t._v("#")]),t._v(" Fargate for ECS")]),t._v(" "),a("p",[t._v("AWS Fargate is a serverless solution for running containerized applications without managing servers.")]),t._v(" "),a("p",[t._v("Several IaC modules for common Fargate implementations are available. See the "),a("RouterLink",{attrs:{to:"/iac/available-modules.html"}},[t._v("AS shared modules")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"amazon-ecs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#amazon-ecs"}},[t._v("#")]),t._v(" Amazon ECS")]),t._v(" "),a("p",[t._v("Amazon ECS is a container management service (manages the lifecycle of your containers, e.g. placing tasks, starting/stopping containers). ECS runs the containers on a cluster of EC2 instances and gives you the choice between two models for running your containers:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("ECS Launch Type")]),t._v(" "),a("th",[t._v("You")]),t._v(" "),a("th",[t._v("AWS")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("EC2")]),t._v(" "),a("td",[t._v("You manage the EC2s for running the containers and you manage the containers.")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("Fargate")]),t._v(" "),a("td",[t._v("You manage the containers.")]),t._v(" "),a("td",[t._v("AWS manages the underlying EC2s for running the containers.")])])])]),t._v(" "),a("p",[t._v("Fargate is typically our preferred model, as it involves less configuration and management, and makes it easy to scale. It is sometimes more cost effective (particularly for variable traffic, small test environments, or smaller workloads) but you should always compare estimated costs for different services for your particular use case in order to select the best option.")]),t._v(" "),a("h2",{attrs:{id:"key-terms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key-terms"}},[t._v("#")]),t._v(" Key Terms")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Term")]),t._v(" "),a("th",[t._v("Definition")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Task Definition")]),t._v(" "),a("td",[t._v('The "blueprint": a template specifying the Docker images to use, cpu, memory, environment variables, ports, secrets, etc.')])]),t._v(" "),a("tr",[a("td",[t._v("Task")]),t._v(" "),a("td",[t._v("An application instance. Often there is one container per task, though we could also run multiple containers per task in order to run a sidecar for the application e.g. running a main container for the application traffic and another for detailed monitoring or metrics.")])]),t._v(" "),a("tr",[a("td",[t._v("Service")]),t._v(" "),a("td",[t._v("A service runs some number of copies of the task definition, providing horizontal scalability. If a task is unhealthy, the service will kill it and start a new task to guarantee the specified number of tasks are always running.")])])])]),t._v(" "),a("h2",{attrs:{id:"fargate-task-vs-fargate-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fargate-task-vs-fargate-service"}},[t._v("#")]),t._v(" Fargate Task vs. Fargate Service")]),t._v(" "),a("ul",[a("li",[t._v("A job that is invoked, does some work, and completes/exits (e.g. a daily ETL) should be run as a task.")]),t._v(" "),a("li",[t._v("Continuously running processes (e.g. a web server) should be run as a service.")])]),t._v(" "),a("h2",{attrs:{id:"fargate-task-vs-lambda"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fargate-task-vs-lambda"}},[t._v("#")]),t._v(" Fargate Task vs. Lambda")]),t._v(" "),a("ul",[a("li",[t._v("A job that is invoked, does some work, and completes/exits is also a good candidate for running as a Lambda function. Both are serverless solutions where you pay for only the compute used. However, the pricing models are different and you should compare the estimated charges to determine the best option for your specific use case.")]),t._v(" "),a("li",[t._v("A Lambda function is less overhead to get started, as you can run your code without containers.")]),t._v(" "),a("li",[t._v("However, Lambda has strict limits on timeout, cpu, and RAM, which Fargate does not. A Fargate Task is better suited to long-running workloads or those needing more compute, which exceed the Lambda timeout/limits.")])]),t._v(" "),a("h2",{attrs:{id:"fargate-service-concepts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fargate-service-concepts"}},[t._v("#")]),t._v(" Fargate Service Concepts")]),t._v(" "),a("h3",{attrs:{id:"load-balancing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#load-balancing"}},[t._v("#")]),t._v(" Load Balancing")]),t._v(" "),a("p",[t._v("A dedicated load balancer enables you to attach a domain to your Fargate Service (you could attach a public IP to the service but it would change every time you redeployed the service) and distributes traffic across the tasks in your containers.")]),t._v(" "),a("p",[t._v("The load balancer also performs health checks on the tasks in your service; it sends periodic requests and verifies that the expected response is returned. It communicates with the ECS service scheduler to restart unhealthy tasks in order to maintain the desired number of healthy tasks in your service. When a task is unhealthy, ECS removes the task from the load balancer, waits for a deregistration delay (time for the load balancer to drain active connections), and starts a new task which it registers with the load balancer.")]),t._v(" "),a("h3",{attrs:{id:"auto-scaling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auto-scaling"}},[t._v("#")]),t._v(" Auto Scaling")]),t._v(" "),a("p",[t._v("Reduce costs and meet demand by scaling the number of tasks running your application up/down in response to demand.")]),t._v(" "),a("p",[t._v("Multiple policies can be combined - when multiple policies trigger a scale out or scale in simultaneously Auto Scaling will take instruction from the one that yields the largest number of tasks running. It is not recommended to mix target tracking and step scaling policies.")]),t._v(" "),a("p",[t._v("There are three approaches to Auto Scaling a Fargate service:")]),t._v(" "),a("h4",{attrs:{id:"target-tracking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#target-tracking"}},[t._v("#")]),t._v(" Target Tracking")]),t._v(" "),a("p",[t._v('This approach increases/decreases the number of tasks running (between a max and min you specify) in order to keep metrics like cpu and memory utilization at a specified level. This is the "out of the box" approach and is typically sufficient. Target tracking is a good option when your target metrics like cpu and memory utilization fluctuate predictably for a given load and proportionally to the number of instances running your application.')]),t._v(" "),a("ul",[a("li",[t._v("You specify a single target value for your metric, e.g. maintain 75% average CPU utilization across all tasks. AWS does the rest, like creating/managing the CloudWatch alarms to monitor the metric and scaling in/out.")]),t._v(" "),a("li",[t._v("There are several predefined metrics (average cpu utilization, average memory utilization, request count per target) or you can define your own. The metrics are aggregated across all of the tasks your service is running.")]),t._v(" "),a("li",[t._v("Setting the metrics: typically, you would want a metric like CPU utilization to use a threshold no higher than 75% so that you still have some left to handle traffic spikes.")])]),t._v(" "),a("h4",{attrs:{id:"step-scaling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-scaling"}},[t._v("#")]),t._v(" Step Scaling")]),t._v(" "),a("p",[t._v("Step scaling is a good option when you need more fine-grained control, or your metrics fluctuate unpredictably for a given load.")]),t._v(" "),a("ul",[a("li",[t._v("Instead of a single target for the metric, you define high and low thresholds. You also define the behavior when the threshold is exceeded - how much capacity to add or remove.")]),t._v(" "),a("li",[t._v("The Step Adjustments refer to creating a set of scaling adjustments such that the aggressiveness of the capacity response depends on the size of the alarm breach.")]),t._v(" "),a("li",[t._v("You create and manage the CloudWatch alarms for the scaling policies.")]),t._v(" "),a("li",[t._v("Step scaling is also the best option when working with a WebSocket application.")])]),t._v(" "),a("h4",{attrs:{id:"scheduled-scaling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scheduled-scaling"}},[t._v("#")]),t._v(" Scheduled Scaling")]),t._v(" "),a("p",[t._v("App Autoscaling Scheduled Actions increase or decrease the minimum/maximum capacity based on the date/time (can be a one-time event or a cron).")]),t._v(" "),a("h3",{attrs:{id:"using-scheduled-scaling-for-cost-savings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-scheduled-scaling-for-cost-savings"}},[t._v("#")]),t._v(" Using Scheduled Scaling for Cost Savings")]),t._v(" "),a("p",[t._v("We recommend using scheduled scaling for cost savings in the lower environments. For example, if the lower environments of your ECS Service are used only during business hours for development purposes, scheduled scaling actions can shut down the service on nights and weekends, yielding significant savings.")]),t._v(" "),a("h4",{attrs:{id:"how-it-works"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works"}},[t._v("#")]),t._v(" How it works:")]),t._v(" "),a("p",[t._v("ECS Fargate Services are stopped by setting the count of running tasks to 0.")]),t._v(" "),a("p",[t._v("The service's capacity can be set to 0 on a schedule (one-time event or cron) by creating an App Autoscaling Scheduled Action which sets the max capacity of the service to 0. When the action is triggered, the new max capacity is below the service's current capacity, so autoscaling scales in to the new maximum (0).")]),t._v(" "),a("div",{staticClass:"language-hcl extra-class"},[a("pre",{pre:!0,attrs:{class:"language-hcl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("resource "),a("span",{pre:!0,attrs:{class:"token type variable"}},[t._v('"aws_appautoscaling_target"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ecs_target_example"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("service_namespace")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ecs"')]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("resource_id")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"service/'),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("aws_ecs_cluster"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("/"),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("aws_ecs_service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v('"')]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("scalable_dimension")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ecs:service:DesiredCount"')]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("min_capacity")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" var.min_capacity\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("max_capacity")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" var.max_capacity\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("resource "),a("span",{pre:!0,attrs:{class:"token type variable"}},[t._v('"aws_appautoscaling_scheduled_action"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"shutdown_example"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("name")]),t._v("               "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token type variable"}},[t._v("service_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("-shutdown-example-"),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token type variable"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v('"')]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("service_namespace")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" aws_appautoscaling_target.ecs_target_example.service_namespace\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("resource_id")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" aws_appautoscaling_target.ecs_target_example.resource_id\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("scalable_dimension")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" aws_appautoscaling_target.ecs_target_example.scalable_dimension\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("schedule")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" var.shutdown_schedule\n   \n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("scalable_target_action")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("max_capacity")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("A scheduled action does not keep track of the original values or return them after a certain time. So to start your service you must have a second action to return to the previous capacity.")]),t._v(" "),a("p",[t._v("To start the service, create a second App Autoscaling Scheduled Action which returns the min and max capacity values to their previous values. Since the new minimum capacity is above the current capacity (0), the task count will be raised to the new minimum. Your other autoscaling rules (target tracking or step scaling) will trigger further scaling out as needed.")]),t._v(" "),a("div",{staticClass:"language-hcl extra-class"},[a("pre",{pre:!0,attrs:{class:"language-hcl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("resource "),a("span",{pre:!0,attrs:{class:"token type variable"}},[t._v('"aws_appautoscaling_scheduled_action"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"startup_example"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("name")]),t._v("               "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token type variable"}},[t._v("service_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("-startup-example-"),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token type variable"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v('"')]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("service_namespace")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" aws_appautoscaling_target.ecs_target_example.service_namespace\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("resource_id")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" aws_appautoscaling_target.ecs_target_example.resource_id\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("scalable_dimension")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" aws_appautoscaling_target.ecs_target_example.scalable_dimension\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("schedule")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" var.startup_schedule\n\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("scalable_target_action")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("min_capacity")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" var.min_capacity \n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("max_capacity")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" var.max_capacity\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);