---
layout: default
title: projects

permalink: /projects/
---
# Past and on-going projects

<div class="all-projects">
  {% for project in site.projects %}
    <div class="project-thumbnail">
      <div style="display: flex; flex-direction: column; max-width: 40%">
        {% for image in project.thumbnail %}
          <img class="thumbnail-img-project" src="{{ image | relative_url }}" alt="{{ project.title }}"/>
        {% endfor%}
      </div>
      <div class="thumbnail-description-project">
        <!-- <a href="{{ project.url | relative_url }}" class="thumbnail-title">{{ project.title }}</a> -->
        <p class="thumbnail-title">{{ project.title }}</p>
        <div style="display: flex; flex-direction: row; align-items: center">
          <strong style="padding-right: 10px">Tools:</strong>
          {% for tool in project.tools %}
            <div class="thumbnail-categories">{{ tool }} </div>
          {% endfor %}
        </div>
        <div style="padding-top: 8px;">
          <strong style="padding-bottom: 8px">Abstract:</strong>
          <br>{{ project.overview }}
        </div>
      </div>
    </div>
    <hr style="border: none; width: 100%; height: 0.5px; background-color: black;">
  {% endfor %}
</div>