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
    <div class="post-thumbnail">
      <img class="thumbnail-img" src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }}"/>
      <div class="thumbnail-description">
        <a href="{{ post.url }}" class="thumbnail-title">{{ post.title }}</a>
        <div class="thumbnail-preview">{{ post.preview }}</div>
        <div class="thumbnail-date">{{ post.date | date_to_string: "ordinal", "US"  }}</div>
        <div style="display: flex; flex-direction: row;">
          {% for category in post.categories %}
            <div class="thumbnail-categories">{{ category }} </div>
          {% endfor %}
        </div>
      </div>
    </div>
  {% endfor %}
</div>