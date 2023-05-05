import React from 'react';
import {  Link } from "react-router-dom";



function Project_1() {
  return (
  <main className="main">
  <nav className="navbar-c navbar navbar-dark bg-dark">
    <div className="">
      <Link className="navbar-brand-c" to="/">
        dvinay∖
      </Link>
      <Link className="navbar-brand-c" to="/projects">
        Projects∖
      </Link>
      <a className="navbar-brand-c">Compound Interest Calculator</a>
      <button
        className="navbar-brand-button navbar-toggler"
        onclick="myFunction()"
        type="button"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
      ></div>
    </div>
  </nav>
  {/* Page content*/}
  <div className="container mt-5">
    <div className="row">
      <div className="col-lg-8">
        {/* Post content*/}
        <article>
          {/* Post header*/}
          <header className="mb-4">
            {/* Post title*/}
            <h1 className="fw-bolder mb-1">
              Dvinay Compound Interest Calculator
            </h1>
            {/* Post meta content*/}
            <div className="text-muted fst-italic mb-2">
              Posted on December 5, 2021 by ~Vinay Dangodra
            </div>
            {/* Post categories*/}
            <a
              className="badge bg-secondary text-decoration-none link-light"
              href="#!"
            >
              Flask
            </a>
            <a
              className="badge bg-secondary text-decoration-none link-light"
              href="#!"
            >
              Python
            </a>
          </header>
          {/* Preview image figure*/}
          <figure className="mb-4">
            {/*    
                      <img class="img-fluid rounded" src="images/project_1_banner.png" style="width: 100%;" alt=" ..." />
                      */}
            <iframe
              id="frame"
              src="https://dvinaycompoundinterest.pythonanywhere.com/"
              scrolling="yes"
              height={500}
              width="100%"
              style={{
                border: "5px solid black",
                borderRadius: 20,
                padding: 10
              }}
              frameBorder={0}
            />
          </figure>
          {/* Post content*/}
          <section className="mb-5">
            <p className="fs-5 mb-4">
              This is a compound interest calculator that calculates compound
              interest of bulk amount as well as monthly or yearly
              contributions. The backend logic of this project is written in
              python. The web framework used in Flask-Python. The frontend used
              is HTML Bootstrap and Javascript. The programming of the graph
              output is done in matplotlib and a image of the matplotlib graph
              is shown in html. The output in the Backend is generated in the
              form of python list and then converted to html list.
            </p>
            <p className="fs-5 mb-4">
              This project is hosted in the form of a website on{" "}
              <a
                href="https://dvinaycompoundinterest.pythonanywhere.com/"
                target="_blank"
              >
                This link
              </a>
              <br />
              The exe file for the same is below here :-
              <a
                href="https://drive.google.com/uc?export=download&id=1936xUnsxlWNHhptX-DaPq__emU7WyoPM"
                target="_blank"
              >
                Download
              </a>
            </p>
            <h2 className="fw-bolder mb-4 mt-5">The Code</h2>
            <p className="fs-5 mb-4">
              The calculator.py file is the file used to do the actual
              calculations. Its the logic behind the calculator app. It canbe
              used individually as a python script that can be run in a python
              environment.
            </p>
            <div className="code-toolbar">
              <pre className=" language-html">
                {"                                                "}
                <code className=" language-python">
                  {"\n"}import matplotlib.pyplot as plt{"\n"}def
                  percent_added(per, amount):{"\n"}
                  {"    "}val = amount * (per/100){"\n"}
                  {"    "}final_val = amount + val{"\n"}
                  {"    "}return final_val{"\n"}
                  {"\n"}def ci(p, n, r, t, m):{"\n"}
                  {"    "}x1 = [0]{"\n"}
                  {"    "}graph_dict_1 = [10000]{"\n"}
                  {"    "}graph_dict_2 = [10000]{"\n"}
                  {"    "}alpha = p{"\n"}
                  {"    "}monthly_amount_investment = p{"\n"}
                  {"    "}x = t{"\n"}
                  {"    "}a = p{"\n"}
                  {"    "}c = n{"\n"}
                  {"    "}y = m*12{"\n"}
                  {"    "}h = m*6{"\n"}
                  {"    "}q = m*3{"\n"}
                  {"    "}# m = m{"\n"}
                  {"    "}d = m*12/365{"\n"}
                  {"    "}year_number = 0{"\n"}
                  {"    "}while x&gt;0:{"\n"}
                  {"        "}while c&gt;0:{"\n"}
                  {"            "}if n==1:{"\n"}
                  {"                "}monthly_amount_investment +=y{"\n"}
                  {"                "}a = percent_added(r, a){"\n"}
                  {"                "}a += y{"\n"}
                  {"            "}elif n==2:{"\n"}
                  {"                "}monthly_amount_investment +=h{"\n"}
                  {"                "}a = percent_added(r/2, a){"\n"}
                  {"                "}a += h{"\n"}
                  {"            "}elif n==4:{"\n"}
                  {"                "}monthly_amount_investment +=q{"\n"}
                  {"                "}a = percent_added(r/4, a){"\n"}
                  {"                "}a += q{"\n"}
                  {"            "}elif n==12:{"\n"}
                  {"                "}monthly_amount_investment +=m{"\n"}
                  {"                "}a = percent_added(r/12, a){"\n"}
                  {"                "}a += m{"\n"}
                  {"            "}elif n==365:{"\n"}
                  {"                "}monthly_amount_investment +=d{"\n"}
                  {"                "}a = percent_added(r/365, a){"\n"}
                  {"                "}a += d{"\n"}
                  {"            "}# print(f"month ended value {"{"}alpha{"}"}-
                  {"{"}a{"}"}"){"\n"}
                  {"            "}c -=1{"\n"}
                  {"        "}c = n{"\n"}
                  {"        "}x -=1{"\n"}
                  {"        "}year_number +=1{"\n"}
                  {"        "}x1.append(year_number){"\n"}
                  {"        "}graph_dict_1.append(monthly_amount_investment)
                  {"\n"}
                  {"        "}graph_dict_2.append(a){"\n"}
                  {"        "}# print(f"year ended value{"{"}a{"}"}"){"\n"}
                  {"    "}# print(graph_dict){"\n"}
                  {"    "}plt.cla(){"\n"}
                  {"    "}plt.plot(x1, graph_dict_1, label = "investment",
                  marker='o', markersize=12){"\n"}
                  {"    "}plt.plot(x1, graph_dict_2, label = "return",
                  marker='o', markersize=12){"\n"}
                  {"    "}plt.xlabel('Years'){"\n"}
                  {"    "}plt.ylabel('Amount'){"\n"}
                  {"    "}plt.title('Results'){"\n"}
                  {"    "}plt.legend(){"\n"}
                  {"    "}if __name__ == '__main__':{"\n"}
                  {"\n"}
                  {"        "}plt.show(){"\n"}
                  {"    "}
                  plt.savefig('/home/dvinaycompoundinterest/mysite/static/foo.png')
                  {"\n"}
                  {"    "}if n==1:{"\n"}
                  {"        "}pr = p+(y*n*t){"\n"}
                  {"    "}elif n==2:{"\n"}
                  {"        "}pr = p+(h*n*t){"\n"}
                  {"    "}elif n==4:{"\n"}
                  {"        "}pr = p+(q*n*t){"\n"}
                  {"    "}elif n==12:{"\n"}
                  {"        "}pr = p+(m*n*t){"\n"}
                  {"    "}elif n==365:{"\n"}
                  {"        "}pr = p+(d*n*t){"\n"}
                  {"    "}# defining interest{"\n"}
                  {"    "}i = a - pr{"\n"}
                  {"    "}# Show results{"\n"}
                  {"    "}if __name__ == '__main__':{"\n"}
                  {"        "}print(f"Principle = {"{"}p{"}"} \nRate of interest
                  = {"{"}r{"}"} % \nTotal amount invested= {"{"}pr{"}"} \nTotal
                  amount got = {"{"}a{"}"}\nCompound interest = {"{"}i{"}"}")
                  {"\n"}
                  {"    "}total_percentage(pr, i){"\n"}
                  {"    "}tp = total_percentage(pr, i){"\n"}
                  {"    "}api_return = {"{"}
                  {"\n"}
                  {"        "}"":[1, 2],{"\n"}
                  {"        "}"Principle":f"{"{"}p{"}"} ₹",{"\n"}
                  {"        "}"Rate of interest":f"{"{"}r{"}"} %",{"\n"}
                  {"        "}"Total amount invested" : f"{"{"}pr{"}"} ₹",{"\n"}
                  {"        "}"Total amount received": f"{"{"}a{"}"} ₹",{"\n"}
                  {"        "}"Compound interest" : f"{"{"}i{"}"} ₹",{"\n"}
                  {"        "}"All over profit": f"{"{"}tp{"}"} %",{"\n"}
                  {"        "}"Data for graph preparation":
                  monthly_amount_investment{"\n"}
                  {"    "}
                  {"}"}
                  {"\n"}
                  {"    "}return(api_return){"\n"}
                  {"\n"}
                  {"\n"}
                  {"\n"}def total_percentage(p, i):{"\n"}
                  {"    "}p = float(p){"\n"}
                  {"    "}i = float(i){"\n"}
                  {"    "}percentage = i/p*100{"\n"}
                  {"    "}if __name__ == '__main__':{"\n"}
                  {"        "}print(f"Total profit = {"{"}percentage{"}"} %")
                  {"\n"}
                  {"    "}return percentage{"\n"}
                  {"\n"}if __name__=="__main__":{"\n"}
                  {"    "}p = int(input("Enter Princilpe Value:-\n")){"\n"}
                  {"    "}r = float(input("Enter rate of interest per
                  annum:-\n")){"\n"}
                  {"    "}# n = int(input("Enter number of times compound in a
                  tenure:-\n")){"\n"}
                  {"    "}t = int(input("Enter number of years:-\n")){"\n"}
                  {"    "}abc = input("Enter 'y' for yearly deposits and 'm' for
                  monthly deposits"){"\n"}
                  {"    "}if abc == "m":{"\n"}
                  {"        "}m = float(input("Enter monthly
                  contributions:-\n")){"\n"}
                  {"    "}elif abc == "y":{"\n"}
                  {"        "}m = float(input("Enter yearly contributions:-\n"))
                  {"\n"}
                  {"        "}m = m/12{"\n"}
                  {"    "}xyz = input("Enter 'y' for yearly, 'h' for half
                  yearly, 'q' for quarterly, 'm' for monthly, 'd' for daily
                  compoundation"){"\n"}
                  {"    "}if xyz == "y":{"\n"}
                  {"        "}n = 1{"\n"}
                  {"    "}elif xyz =="h":{"\n"}
                  {"        "}n = 2{"\n"}
                  {"    "}elif xyz =="q":{"\n"}
                  {"        "}n = 4{"\n"}
                  {"    "}elif xyz =="m":{"\n"}
                  {"        "}n = 12{"\n"}
                  {"    "}elif xyz =="d":{"\n"}
                  {"        "}n = 365{"\n"}
                  {"\n"}
                  {"    "}ci(p, n, r, t, m){"\n"}
                  {"\n"}
                  {"                                                "}
                </code>
                {"\n"}
                {"                                            "}
              </pre>
            </div>
            <p className="fs-5 mb-4">
              The app.py is the flask code in which the website actually runs
              on. It imports calculator.py as a module. Flask, rendertemplate
              and requests is used from flask.
            </p>
            <div className="code-toolbar">
              <pre className=" language-html">
                {"                                        "}
                <code className=" language-python">
                  {"\n"}from flask import Flask, render_template, request{"\n"}
                  from calculator import *{"\n"}app=Flask(__name__){"\n"}
                  {"\n"}
                  {"\n"}def get_output(p, r, t, abc, m, n):{"\n"}
                  {"    "}m = float(m){"\n"}
                  {"    "}if abc=="m":{"\n"}
                  {"        "}con=m{"\n"}
                  {"    "}if abc=="y":{"\n"}
                  {"        "}con=m/12{"\n"}
                  {"    "}answer = ci(p, n, r, t, con){"\n"}
                  {"    "}principle = answer['Principle']{"\n"}
                  {"    "}roi = answer['Rate of interest']{"\n"}
                  {"    "}amount_invested = answer['Total amount invested']
                  {"\n"}
                  {"    "}amount_got = answer['Total amount received']{"\n"}
                  {"    "}interest = answer['Compound interest']{"\n"}
                  {"    "}profit = answer['All over profit']{"\n"}
                  {"    "}# output = f"Principle Amount: {"{"}principle{"}"}\n
                  Rate of interest: {"{"}roi{"}"}\nTotal amount invested = {"{"}
                  amount_invested{"}"}\nTotal return = {"{"}amount_got{"}"}
                  \nCompound interest = {"{"}interest{"}"}\nAll oveer profit ={" "}
                  {"{"}profit{"}"}"{"\n"}
                  {"    "}output = [f"Principle Amount: {"{"}principle{"}"}",
                  {"\n"}
                  {"              "}f"Rate of interest: {"{"}roi{"}"}",{"\n"}
                  {"              "}f"Total amount invested = {"{"}
                  amount_invested{"}"}",{"\n"}
                  {"              "}f"Total return = {"{"}amount_got{"}"}",
                  {"\n"}
                  {"              "}f"Compound interest = {"{"}interest{"}"}",
                  {"\n"}
                  {"              "}f"All over profit = {"{"}profit{"}"}"]{"\n"}
                  {"    "}return output{"\n"}
                  {"\n"}
                  {"\n"}
                  {"\n"}@app.route("/", methods=['GET', 'POST']){"\n"}def
                  first_page():{"\n"}
                  {"\n"}
                  {"    "}if request.method == 'POST':{"\n"}
                  {"        "}p =request.form['p']{"\n"}
                  {"        "}r = request.form['r']{"\n"}
                  {"        "}t =request.form['t']{"\n"}
                  {"        "}abc =request.form['abc']{"\n"}
                  {"        "}m =request.form['m']{"\n"}
                  {"        "}n =request.form['xyz']{"\n"}
                  {"        "}p = float(p){"\n"}
                  {"        "}r = float(r){"\n"}
                  {"        "}t = float(t){"\n"}
                  {"        "}m = float(m){"\n"}
                  {"        "}n = float(n){"\n"}
                  {"\n"}
                  {"        "}data_list = get_output(p, r, t, abc, m, n){"\n"}
                  {"\n"}
                  {"        "}return render_template('index.html',
                  output=data_list, flash_message="True"){"\n"}
                  {"\n"}
                  {"    "}return render_template('index.html',
                  flash_message="False"){"\n"}
                  {"\n"}
                  {"\n"}# answer = ci(10000, 1, 10, 10, 1000){"\n"}
                  {"\n"}# print(answer){"\n"}
                  {"\n"}if __name__ == '__main__':{"\n"}
                  {"    "}app.run(debug=True, host = "0.0.0.0"){"\n"}
                  {"                                        "}
                </code>
                {"\n"}
                {"                                    "}
              </pre>
            </div>
            <p className="fs-5 mb-4">
              The frontend includes use of HTML Bootstrap and Javascript. It
              uses for loop of flask to show the list output. The HTML file is
              in the templates folder.
            </p>
            <div className="code-toolbar">
              <pre className=" language-html">
                {"                                        "}
                <code className=" language-html">
                  {"\n"}&lt;!DOCTYPE html&gt;{"\n"}&lt;html lang="en"&gt;{"\n"}
                  {"    "}&lt;head&gt;{"\n"}
                  {"        "}&lt;meta charset="utf-8" /&gt;{"\n"}
                  {"        "}&lt;meta name="viewport"
                  content="width=device-width, initial-scale=1,
                  shrink-to-fit=no" /&gt;{"\n"}
                  {"        "}&lt;meta name="description" content="" /&gt;{"\n"}
                  {"        "}&lt;meta name="author" content="" /&gt;{"\n"}
                  {"        "}&lt;title&gt;Clean Blog - Start Bootstrap
                  Theme&lt;/title&gt;{"\n"}
                  {"        "}&lt;link rel="icon" type="image/x-icon"
                  href="assets/favicon.ico" /&gt;{"\n"}
                  {"        "}&lt;!-- Font Awesome icons (free version)--&gt;
                  {"\n"}
                  {"        "}&lt;script
                  src="https://use.fontawesome.com/releases/v5.15.3/js/all.js"
                  crossorigin="anonymous"&gt;&lt;/script&gt;{"\n"}
                  {"        "}&lt;!-- Google fonts--&gt;{"\n"}
                  {"        "}&lt;link
                  href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic"
                  rel="stylesheet" type="text/css" /&gt;{"\n"}
                  {"        "}&lt;link
                  href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800"
                  rel="stylesheet" type="text/css" /&gt;{"\n"}
                  {"        "}&lt;!-- Core theme CSS (includes Bootstrap)--&gt;
                  {"\n"}
                  {"        "}&lt;link href="css/styles.css" rel="stylesheet"
                  /&gt;{"\n"}
                  {"    "}&lt;/head&gt;{"\n"}
                  {"    "}&lt;body&gt;{"\n"}
                  {"        "}&lt;!-- Navigation--&gt;{"\n"}
                  {"        "}&lt;nav class="navbar navbar-expand-lg
                  navbar-light" id="mainNav"&gt;{"\n"}
                  {"            "}&lt;div class="container px-4 px-lg-5"&gt;
                  {"\n"}
                  {"                "}&lt;a class="navbar-brand"
                  href="index.html"&gt;Start Bootstrap&lt;/a&gt;{"\n"}
                  {"                "}&lt;button class="navbar-toggler"
                  type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarResponsive"
                  aria-controls="navbarResponsive" aria-expanded="false"
                  aria-label="Toggle navigation"&gt;{"\n"}
                  {"                    "}Menu{"\n"}
                  {"                    "}&lt;i class="fas
                  fa-bars"&gt;&lt;/i&gt;{"\n"}
                  {"                "}&lt;/button&gt;{"\n"}
                  {"                "}&lt;div class="collapse navbar-collapse"
                  id="navbarResponsive"&gt;{"\n"}
                  {"                    "}&lt;ul class="navbar-nav ms-auto py-4
                  py-lg-0"&gt;{"\n"}
                  {"                        "}&lt;li class="nav-item"&gt;&lt;a
                  class="nav-link px-lg-3 py-3 py-lg-4"
                  href="index.html"&gt;Home&lt;/a&gt;&lt;/li&gt;{"\n"}
                  {"                        "}&lt;li class="nav-item"&gt;&lt;a
                  class="nav-link px-lg-3 py-3 py-lg-4"
                  href="about.html"&gt;About&lt;/a&gt;&lt;/li&gt;{"\n"}
                  {"                        "}&lt;li class="nav-item"&gt;&lt;a
                  class="nav-link px-lg-3 py-3 py-lg-4"
                  href="post.html"&gt;Sample Post&lt;/a&gt;&lt;/li&gt;{"\n"}
                  {"                        "}&lt;li class="nav-item"&gt;&lt;a
                  class="nav-link px-lg-3 py-3 py-lg-4"
                  href="contact.html"&gt;Contact&lt;/a&gt;&lt;/li&gt;{"\n"}
                  {"                    "}&lt;/ul&gt;{"\n"}
                  {"                "}&lt;/div&gt;{"\n"}
                  {"            "}&lt;/div&gt;{"\n"}
                  {"        "}&lt;/nav&gt;{"\n"}
                  {"        "}&lt;!-- Page Header--&gt;{"\n"}
                  {"        "}&lt;header class="masthead"
                  style="background-image: url('assets/img/about-bg.jpg')"&gt;
                  {"\n"}
                  {"            "}&lt;div class="container position-relative
                  px-4 px-lg-5"&gt;{"\n"}
                  {"                "}&lt;div class="row gx-4 gx-lg-5
                  justify-content-center"&gt;{"\n"}
                  {"                    "}&lt;div class="col-md-10 col-lg-8
                  col-xl-7"&gt;{"\n"}
                  {"                        "}&lt;div class="page-heading"&gt;
                  {"\n"}
                  {"                            "}&lt;h1&gt;About Me&lt;/h1&gt;
                  {"\n"}
                  {"                            "}&lt;span
                  class="subheading"&gt;This is what I do.&lt;/span&gt;{"\n"}
                  {"                        "}&lt;/div&gt;{"\n"}
                  {"                    "}&lt;/div&gt;{"\n"}
                  {"                "}&lt;/div&gt;{"\n"}
                  {"            "}&lt;/div&gt;{"\n"}
                  {"        "}&lt;/header&gt;{"\n"}
                  {"        "}&lt;!-- Main Content--&gt;{"\n"}
                  {"        "}&lt;main class="mb-4"&gt;{"\n"}
                  {"            "}&lt;div class="container px-4 px-lg-5"&gt;
                  {"\n"}
                  {"                "}&lt;div class="row gx-4 gx-lg-5
                  justify-content-center"&gt;{"\n"}
                  {"                    "}&lt;div class="col-md-10 col-lg-8
                  col-xl-7"&gt;{"\n"}
                  {"                        "}&lt;p&gt;Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Saepe nostrum ullam
                  eveniet pariatur voluptates odit, fuga atque ea nobis sit
                  soluta odio, adipisci quas excepturi maxime quae totam ducimus
                  consectetur?&lt;/p&gt;{"\n"}
                  {"                        "}&lt;p&gt;Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Eius praesentium
                  recusandae illo eaque architecto error, repellendus iusto
                  reprehenderit, doloribus, minus sunt. Numquam at quae
                  voluptatum in officia voluptas voluptatibus, minus!&lt;/p&gt;
                  {"\n"}
                  {"                        "}&lt;p&gt;Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Aut consequuntur magnam,
                  excepturi aliquid ex itaque esse est vero natus quae optio
                  aperiam soluta voluptatibus corporis atque iste neque sit
                  tempora!&lt;/p&gt;{"\n"}
                  {"                    "}&lt;/div&gt;{"\n"}
                  {"                "}&lt;/div&gt;{"\n"}
                  {"            "}&lt;/div&gt;{"\n"}
                  {"        "}&lt;/main&gt;{"\n"}
                  {"        "}&lt;!-- Footer--&gt;{"\n"}
                  {"        "}&lt;footer class="border-top"&gt;{"\n"}
                  {"            "}&lt;div class="container px-4 px-lg-5"&gt;
                  {"\n"}
                  {"                "}&lt;div class="row gx-4 gx-lg-5
                  justify-content-center"&gt;{"\n"}
                  {"                    "}&lt;div class="col-md-10 col-lg-8
                  col-xl-7"&gt;{"\n"}
                  {"                        "}&lt;ul class="list-inline
                  text-center"&gt;{"\n"}
                  {"                            "}&lt;li
                  class="list-inline-item"&gt;{"\n"}
                  {"                                "}&lt;a href="#!"&gt;{"\n"}
                  {"                                    "}&lt;span
                  class="fa-stack fa-lg"&gt;{"\n"}
                  {"                                        "}&lt;i class="fas
                  fa-circle fa-stack-2x"&gt;&lt;/i&gt;{"\n"}
                  {"                                        "}&lt;i class="fab
                  fa-twitter fa-stack-1x fa-inverse"&gt;&lt;/i&gt;{"\n"}
                  {"                                    "}&lt;/span&gt;{"\n"}
                  {"                                "}&lt;/a&gt;{"\n"}
                  {"                            "}&lt;/li&gt;{"\n"}
                  {"                            "}&lt;li
                  class="list-inline-item"&gt;{"\n"}
                  {"                                "}&lt;a href="#!"&gt;{"\n"}
                  {"                                    "}&lt;span
                  class="fa-stack fa-lg"&gt;{"\n"}
                  {"                                        "}&lt;i class="fas
                  fa-circle fa-stack-2x"&gt;&lt;/i&gt;{"\n"}
                  {"                                        "}&lt;i class="fab
                  fa-facebook-f fa-stack-1x fa-inverse"&gt;&lt;/i&gt;{"\n"}
                  {"                                    "}&lt;/span&gt;{"\n"}
                  {"                                "}&lt;/a&gt;{"\n"}
                  {"                            "}&lt;/li&gt;{"\n"}
                  {"                            "}&lt;li
                  class="list-inline-item"&gt;{"\n"}
                  {"                                "}&lt;a href="#!"&gt;{"\n"}
                  {"                                    "}&lt;span
                  class="fa-stack fa-lg"&gt;{"\n"}
                  {"                                        "}&lt;i class="fas
                  fa-circle fa-stack-2x"&gt;&lt;/i&gt;{"\n"}
                  {"                                        "}&lt;i class="fab
                  fa-github fa-stack-1x fa-inverse"&gt;&lt;/i&gt;{"\n"}
                  {"                                    "}&lt;/span&gt;{"\n"}
                  {"                                "}&lt;/a&gt;{"\n"}
                  {"                            "}&lt;/li&gt;{"\n"}
                  {"                        "}&lt;/ul&gt;{"\n"}
                  {"                        "}&lt;div class="small text-center
                  text-muted fst-italic"&gt;Copyright © Your Website
                  2021&lt;/div&gt;{"\n"}
                  {"                    "}&lt;/div&gt;{"\n"}
                  {"                "}&lt;/div&gt;{"\n"}
                  {"            "}&lt;/div&gt;{"\n"}
                  {"        "}&lt;/footer&gt;{"\n"}
                  {"        "}&lt;!-- Bootstrap core JS--&gt;{"\n"}
                  {"        "}&lt;script
                  src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"&gt;&lt;/script&gt;
                  {"\n"}
                  {"        "}&lt;!-- Core theme JS--&gt;{"\n"}
                  {"        "}&lt;script src="js/scripts.js"&gt;&lt;/script&gt;
                  {"\n"}
                  {"    "}&lt;/body&gt;{"\n"}&lt;/html&gt;{"\n"}
                  {"\n"}
                  {"                                        "}
                </code>
                {"\n"}
                {"                                    "}
              </pre>
            </div>
            <p className="fs-5 mb-4">
              Make a blank file foo.png in the static folder and your code dish
              is ready to be served(host).
            </p>
            <p className="fs-5 mb-4">
              The code is in this{" "}
              <a
                href="https://github.com/VinayDangodra28/dvinaycompoundinterest"
                target="_blank"
              >
                link
              </a>
            </p>
          </section>
        </article>
      </div>
      {/* Side widgets*/}
      <div className="col-lg-4">
        {/* Search widget*/}
        {/*
              <div class="card mb-4">
                  <div class="card-header">Search</div>
                  <div class="card-body">
                      <div class="input-group">
                          <input class="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
                          <button class="btn btn-primary" id="button-search" type="button">Go!</button>
                      </div>
                  </div>
              </div>
          */}
        {/* Categories widget*/}
        <div className="card mb-4">
          <div className="card-header">Categories</div>
          <div className="card-body">
            <div className="row">
              <div className="col-sm-6">
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="projects.html">Web Design</a>
                  </li>
                  <li>
                    <a href="projects.html">Python</a>
                  </li>
                  <li>
                    <a href="projects.html">Flask</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6">
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="projects.html">HTML</a>
                  </li>
                  <li>
                    <a href="projects.html">JavaScript</a>
                  </li>
                  <li>
                    <a href="projects.html">CSS</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Side widget*/}
        <div className="card mb-4">
          <div className="card-header">Help!</div>
          <div className="card-body">
            These are steps to use this program. <br />
            <ol>
              <li>
                Enter the Principle amount or the amount you invested in bulk in
                the start if no bulk investment is done enter 0 in it but don't
                leave it empty otherwise you would get an server error
              </li>
              <li>
                Select whether you do monthly contribution or yearly
                contribution to your investment and enter the amount of your
                contribution if you don't do contributions to your investment
                then enter 0 in the contribution amount section. If you
                withdrawing money instead of contributing enter a negative
                amount of withdrawal.
              </li>
              <li>
                Enter the no. of years you want your investment or SIP to last
                long.
              </li>
              <li>
                Enter the rate of interest you are getting from the investment
                or share.
              </li>
              <li>
                Select the compound frequency. If you get interst every year
                select the yearly option, and eventually yearly, half yearly,
                quaterly, montly or daily.
              </li>
            </ol>
          </div>
        </div>
        <form id="contact-form" method="POST" action="/" name="google-sheet">
          <div className="mb-3">
            <p>Give your suggesstions to me</p>
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-floating">
            <textarea
              className="form-control"
              name="message"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: 100 }}
              defaultValue={""}
            />
            <label htmlFor="floatingTextarea2">Message</label>
            <input
              id="input-page"
              name="page"
              type="text"
              defaultValue="Project 1 Compound interest"
              style={{ display: "none" }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onclick="sendmailpr()"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</main>
  );
}

export default Project_1;