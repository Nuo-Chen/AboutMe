---
permalink: /
title: "Welcome"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I'm a postdoctoral researcher in the [AAARG group](http://arctic.som.ou.edu/) at the University of Oklahoma. My current research explores the interactions between summertime Arctic cyclones, tropopause polar vortices, and Arctic sea ice using the Community Earth System Model version 2 (CESM2). I also use NCAR's Data Assimilation Research Testbed (DART) to assimilate various atmosphere and sea ice observations, enhancing model forecasts and understanding of Arctic dynamics.

 My broader interests include data assimilation, numerical modeling, and the integration of machine learning in atmospheric science.

I completed my PhD at the University of Wisconsin-Madison in [Dr. Jonathan Martin's group](http://marrella.aos.wisc.edu/Martin.html), where I studied adjoint sensitivity in atmospheric dynamics, with a particular focus on sensitivity to potential vorticity.

## Pangu-DART Interface for Data Assimilation with Machine Learning Model
Inspired by the idea that a Ensemble Data Assimilation (DA) system can integrate the observations into forecasts produced by any model, even a black-box model, I developed an interface between a Machine Learning NWP model ([Pangu-Weather](https://github.com/198808xc/Pangu-Weather)) and NSF NCAR's [Data Assimilation Research Testbed](https://dart.ucar.edu/). The code is available at https://github.com/NCAR/DART/tree/main/models/pangu.

## Assessing the Impact of Surface Coupling and Observations on Arctic Cyclone Forecast Performance 
In this Project, we use CESM2 and Observation System Simulation Experiment (OSSE) to investigate the interaction between Arctic Cyclones (ACs), Tropopause Polar Vortices (TPV), and Arctic Sea Ice. 

## Adjoint Sensitivity to Potential Vorticity and Balanced Adjoint Forcing
**Background**: Many studies have used the adjoint sensitivity understand the atmospheric dynamics (e.g. Doyle et al. 2012, 2019, Chu and Tan 2010, Hoover et al. 2015) but mostly on the individual variables.

Combining sensitivity to winds and temperature into the sensitivity to QGPV allows one to get an integral idea of the dynamical system with the "PV thinking". The importance of the ageostrophic imbalance is also evident in the adjoint sensitivity world in the frontal zone as in the real world.
![frontal imbalance](images/imbalance-web.png)

## Adjoint Sensitivity to Potential Vorticity and Balanced Adjoint Forcing
**Background**: The adjoint of the Weather Research and Forecasting (WRF) model produces unphysical gravity wave in the backward integration that bounces back from the domain boundaries. These waves can obscure the interpretation of adjoint output. 

When a geostrophically balanced sensitivity to winds and to temperature are inverted from the sensitivity to Quasi-geostrophic Potential Vorticity (QGPV) and are used as the adjoint forcing for adjoint model initializaiton, the gravity wave pattern can be filtered out.

The adjoint sensitivity to PV also combines wind and temperature sensitivity such that more dynamical insight can be drawn from the adjoint sensitivity analysis using the "PV thinking"
![filter out gravity wave](images/grav900_f14_hor.png)

## Side Project
I use 10-year observation to correct the GFS MOS prediction tailered for the [WxChallenge](https://www.wxchallenge.com/), which asks the competitor to predict the daily highest and lowest temperatures, maximum wind speed, and the total precipitation for the designated city.
![correct mos](images/random.png)

<!-- A data-driven personal website
======
Like many other Jekyll-based GitHub Pages templates, academicpages makes you separate the website's content from its form. The content & metadata of your website are in structured markdown files, while various other files constitute the theme, specifying how to transform that content & metadata into HTML pages. You keep these various markdown (.md), YAML (.yml), HTML, and CSS files in a public GitHub repository. Each time you commit and push an update to the repository, the [GitHub pages](https://pages.github.com/) service creates static HTML pages based on these files, which are hosted on GitHub's servers free of charge.

Many of the features of dynamic content management systems (like Wordpress) can be achieved in this fashion, using a fraction of the computational resources and with far less vulnerability to hacking and DDoSing. You can also modify the theme to your heart's content without touching the content of your site. If you get to a point where you've broken something in Jekyll/HTML/CSS beyond repair, your markdown files describing your talks, publications, etc. are safe. You can rollback the changes or even delete the repository and start over -- just be sure to save the markdown files! Finally, you can also write scripts that process the structured data on the site, such as [this one](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb) that analyzes metadata in pages about talks to display [a map of every location you've given a talk](https://academicpages.github.io/talkmap.html).

Getting started
======
1. Register a GitHub account if you don't have one and confirm your e-mail (required!)
1. Fork [this repository](https://github.com/academicpages/academicpages.github.io) by clicking the "fork" button in the top right. 
1. Go to the repository's settings (rightmost item in the tabs that start with "Code", should be below "Unwatch"). Rename the repository "[your GitHub username].github.io", which will also be your website's URL.
1. Set site-wide configuration and create content & metadata (see below -- also see [this set of diffs](http://archive.is/3TPas) showing what files were changed to set up [an example site](https://getorg-testacct.github.io) for a user with the username "getorg-testacct")
1. Upload any files (like PDFs, .zip files, etc.) to the files/ directory. They will appear at https://[your GitHub username].github.io/files/example.pdf.  
1. Check status by going to the repository settings, in the "GitHub pages" section

Site-wide configuration
------
The main configuration file for the site is in the base directory in [_config.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_config.yml), which defines the content in the sidebars and other site-wide features. You will need to replace the default variables with ones about yourself and your site's github repository. The configuration file for the top menu is in [_data/navigation.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_data/navigation.yml). For example, if you don't have a portfolio or blog posts, you can remove those items from that navigation.yml file to remove them from the header. 

Create content & metadata
------
For site content, there is one markdown file for each type of content, which are stored in directories like _publications, _talks, _posts, _teaching, or _pages. For example, each talk is a markdown file in the [_talks directory](https://github.com/academicpages/academicpages.github.io/tree/master/_talks). At the top of each markdown file is structured data in YAML about the talk, which the theme will parse to do lots of cool stuff. The same structured data about a talk is used to generate the list of talks on the [Talks page](https://academicpages.github.io/talks), each [individual page](https://academicpages.github.io/talks/2012-03-01-talk-1) for specific talks, the talks section for the [CV page](https://academicpages.github.io/cv), and the [map of places you've given a talk](https://academicpages.github.io/talkmap.html) (if you run this [python file](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.py) or [Jupyter notebook](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb), which creates the HTML for the map based on the contents of the _talks directory).

**Markdown generator**

I have also created [a set of Jupyter notebooks](https://github.com/academicpages/academicpages.github.io/tree/master/markdown_generator
) that converts a CSV containing structured data about talks or presentations into individual markdown files that will be properly formatted for the academicpages template. The sample CSVs in that directory are the ones I used to create my own personal website at stuartgeiger.com. My usual workflow is that I keep a spreadsheet of my publications and talks, then run the code in these notebooks to generate the markdown files, then commit and push them to the GitHub repository.

How to edit your site's GitHub repository
------
Many people use a git client to create files on their local computer and then push them to GitHub's servers. If you are not familiar with git, you can directly edit these configuration and markdown files directly in the github.com interface. Navigate to a file (like [this one](https://github.com/academicpages/academicpages.github.io/blob/master/_talks/2012-03-01-talk-1.md) and click the pencil icon in the top right of the content preview (to the right of the "Raw | Blame | History" buttons). You can delete a file by clicking the trashcan icon to the right of the pencil icon. You can also create new files or upload files by navigating to a directory and clicking the "Create new file" or "Upload files" buttons. 

Example: editing a markdown file for a talk
![Editing a markdown file for a talk](/images/editing-talk.png)

For more info
------
More info about configuring academicpages can be found in [the guide](https://academicpages.github.io/markdown/). The [guides for the Minimal Mistakes theme](https://mmistakes.github.io/minimal-mistakes/docs/configuration/) (which this theme was forked from) might also be helpful. -->
