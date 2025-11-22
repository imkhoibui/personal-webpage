---
layout: default
title: projects

permalink: /projects/
---
# Past and on-going projects

<div class="all-projects">
  {% for project in site.projects %}
    <div class="project-thumbnail">
      <img class="thumbnail-img-project" src="{{ project.thumbnail | relative_url }}" alt="{{ project.title }}"/>
      <div class="thumbnail-description-project">
        <a href="{{ project.url }}" class="thumbnail-title">{{ project.title }}</a>
        <div class="thumbnail-preview">{{ project.preview }}</div>
      </div>
    </div>
  {% endfor %}
</div>