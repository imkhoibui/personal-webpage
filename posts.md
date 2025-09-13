---
layout: section
title: posts
permalink: /posts
---

### [home](/) | [projects](/projects.html) | [resources](/resources.html) | [posts](/posts.html) 

# posts

<h1>Latest Posts</h1>

<ul>
  {% for post in site.posts %}
    <li>
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    </li>
  {% endfor %}
</ul>