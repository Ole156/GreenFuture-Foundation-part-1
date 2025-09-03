# GreenFuture Foundation part 1

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GreenFuture Foundation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            line-height: 1.6;
        }
        header {
            background: #2E8B57; /* Green for sustainability */
            color: white;
            padding: 20px;
            text-align: center;
        }
        nav {
            background: #333;
            padding: 10px;
            text-align: center;
        }
        nav a {
            color: white;
            margin: 0 15px;
            text-decoration: none;
        }
        nav a:hover {
            text-decoration: underline;
        }
        .hero {
            background-image: url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee'); /* Nature background */
            background-size: cover;
            background-position: center;
            color: white;
            text-align: center;
            padding: 100px 20px;
        }
        .hero h1 {
            font-size: 3em;
            margin: 0;
        }
        .container {
            padding: 40px 20px;
            max-width: 1100px;
            margin: auto;
        }
        .projects {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
            justify-content: center;
        }
        .project {
            border: 1px solid #ccc;
            padding: 20px;
            width: 300px;
            text-align: center;
            border-radius: 8px;
        }
        .project img {
            width: 100%;
            height: 180px;
            object-fit: cover;
            border-radius: 6px;
        }
        footer {
            background: #333;
            color: white;
            text-align: center;
            padding: 20px;
            margin-top: 20px;
        }
        button {
            background: #2E8B57;
            color: white;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 5px;
            margin-top: 10px;
        }
        button:hover {
            background: #246b46;
        }
    </style>
</head>
<body>

    <!-- HEADER & NAVIGATION -->
    <header>
        <h1>GreenFuture Foundation</h1>
        <p>Building a Sustainable Future Together</p>
    </header>

    <nav>
        <a href="#about">About Us</a>
        <a href="#projects">Projects</a>
        <a href="#involved">Get Involved</a>
        <a href="#contact">Contact</a>
    </nav>

    <!-- HERO SECTION -->
    <section class="hero">
        <h1>Together for a Greener World</h1>
        <p>Join us in reforestation, renewable energy, and education programs.</p>
        <button>Join Us</button>
    </section>

    <!-- ABOUT US -->
    <section id="about" class="container">
        <h2>About Us</h2>
        <p>GreenFuture Foundation is a non-profit organisation dedicated to promoting sustainability through reforestation, renewable energy, and community education projects. Our mission is to combat climate change and create greener futures for generations to come.</p>
    </section>

    <!-- PROJECTS SECTION -->
    <section id="projects" class="container">
        <h2>Our Projects</h2>
        <div class="projects">
            <div class="project">
                <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" alt="Reforestation">
                <h3>Reforestation</h3>
                <p>We plant trees to restore forests and preserve biodiversity.</p>
            </div>
            <div class="project">
                <img src="https://images.unsplash.com/photo-1509395176047-4a66953fd231" alt="Renewable Energy">
                <h3>Renewable Energy</h3>
                <p>Supporting clean energy projects like solar and wind power.</p>
            </div>
            <div class="project">
                <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7" alt="Education">
                <h3>Education</h3>
                <p>Teaching communities about sustainability and green living.</p>
            </div>
        </div>
    </section>

    <!-- GET INVOLVED -->
    <section id="involved" class="container">
        <h2>Get Involved</h2>
        <p>You can make a difference by joining our volunteer network or making a donation to support our projects.</p>
        <button>Volunteer</button>
        <button>Donate</button>
    </section>

    <!-- CONTACT SECTION -->
    <section id="contact" class="container">
        <h2>Contact Us</h2>
        <p>Email: info@greenfuture.org</p>
        <p>Phone: +27 123 456 789</p>
        <p>Follow us on 
            <a href="#">Facebook</a>, 
            <a href="#">Twitter</a>, 
            <a href="#">Instagram</a>
        </p>
    </section>

    <!-- FOOTER -->
    <footer>
        <p>&copy; 2025 GreenFuture Foundation | All Rights Reserved</p>
    </footer>

</body>
</html>

