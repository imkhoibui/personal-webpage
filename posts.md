---
layout: section
title: posts
permalink: /posts
---

### [projects](/projects.html) | [resources](/resources.html) | [posts](/posts.html) | [reviews](/reviews.html)

# posts

<h1>Latest Posts</h1>

<ul>
  {% for post in site.posts %}
    <li>
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>