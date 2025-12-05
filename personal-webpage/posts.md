---
layout: default
title: posts

permalink: /posts/
---
# My posts

<p>Here are some of my writings, from my attempts to get better at science, 
  to book reviews to personal stories, just life in general. </p>

<div class="all-posts">
  {% for post in site.posts %}
    <a class="post-thumbnail" href="{{ post.url | relative_url }}">
      <div class="img-container">
        <img class="thumbnail-img" src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }}"/>
      </div>
      <div class="thumbnail-description">
        <div class="thumbnail-date">{{ post.date | date_to_string: "ordinal", "US"  }}</div>
        <p class="thumbnail-title">{{ post.title }}</p>
        <div class="thumbnail-preview">{{ post.preview }}</div>
        <div style="display: flex; flex-direction: row;">
          {% for category in post.categories %}
            <div class="thumbnail-categories">{{ category }} </div>
          {% endfor %}
        </div>
      </div>
    </a>
  {% endfor %}
</div>