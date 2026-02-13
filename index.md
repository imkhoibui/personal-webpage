---
layout: default
title: about

permalink: "/"
---

## Hi there!

Welcome to my personal website! My name is Khoi, I'm Vietnamese born and raised, currently residing in Ho Chi Minh City, Vietnam. I graduated with a BSc in Computer Science in June 2024 at **[Fulbright University Vietnam](https://fulbright.edu.vn)**, the country's first and only (so-far) liberal arts institution.

My journey started with me going to university in hope of pursuing a career in social science. As an attempt to try out a completely new field, I took the **Introduction to Biology** course out of curiosity and was motivated by the lecturer's enthusiasm. In my 2nd and 3rd year, I picked up CS courses at Fulbright and in my 4th year, came back to studying Biology with *Human Genetics* and *Human Physiology*.

My interests involves **human genetics**, developing **bioinformatics pipelines** and employing various **ML/AI responsible practices** to study the human genomics.

This website is probably going to be updated infrequently, but I hope it can be used as a place to record my
career and life experiences. Feel free to stick around and share your inputs, as well as contacting me for any possible collaboration.

----------
## Milestones:

<p>
These are the experiences that shaped my career, of course, I have learned more 
from the times I <button id="show-hidden" class="button-textlook">failed</button> 
than when I succeeded.
</p>

<div class="timeline">
  {% for milestone in site.data.milestones %}
    <div class="milestone" 
         data-hidden="{{ milestone.hidden | default: false }}">
      {% if milestone.hidden == false %}
        <strong>{{ milestone.date }}</strong>: {{ milestone.description }}
      {% endif %}
      {% if milestone.hidden == true %}
        <div class="hidden-content" style="color: gray" hidden>
          <strong style="color: gray">{{ milestone.date }}</strong>: {{ milestone.description }}
        </div>
      {% endif %}
    </div>
  {% endfor %}
</div>

<script src="{{ '/assets/js/timelines.js' | relative_url }}"></script>
