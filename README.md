# Fitness Club Website

Course project for BSTU, Computer Markup Languages (1st year, 2nd semester).
A multi-page static website for a fitness club — browsing coaches and
trainings, viewing tariffs, checking available time slots, and a mock
account/auth flow.

## Pages

| Page | Purpose |
| --- | --- |
| `home.html` | Landing page |
| `coaches.html` | Coach listing |
| `trainings.html` | Training programs |
| `tariffs.html` | Pricing/subscription tariffs |
| `available.html` | Available time slots (`available.xml` as data source) |
| `account.html` | Account/authentication |
| `index.html` | Entry point |

## Stack

- HTML5, vanilla JS (`js/`)
- SCSS compiled to CSS (`scss/` → `css/`), organized by page/component (BEM-style)

## Running

Static site — open `index.html` (or any page) directly in a browser. No
build step required; the `css/` folder already contains the compiled output.
If editing `scss/`, recompile with your Sass tool of choice.
