---
layout: poetry-default
title: "写在开头"
permalink: /poetry/
---

## 写在开头

一直纠结要不要分享这些文字，大概想在自己变得不那么在意之前整理出来，不然也怪可惜的。

每次记录完，都觉得这是最后一次了，可过几天总能冒出新的句子。大概就像喜欢一个人的理由一样，每次都能找到新的角度。内心想法就和老旧下水道一样，多了就会堵，写作能稍微疏通以下，但没过几天新的念头又会把这个下水道堵住。如果把在想这些的一半时间花在学术上，我也多少也能多写几篇论文（（。

---

## Recent Poems

{% assign poems_by_year = site.poems | group_by_exp: "poem", "poem.date | date: '%Y'" | sort: "name" | reverse %}

{% for year in poems_by_year %}
<div class="year-section">
    <h2 class="year-title">{{ year.name }}</h2>
    <div class="poems-list">
    {% assign sorted_poems = year.items | sort: "date" | reverse %}
    {% for poem in sorted_poems %}
    <article class="poem-item">
        <h3><a href="{{ poem.url | relative_url }}">{{ poem.title }}</a></h3>
        <div class="poem-meta">
            <time datetime="{{ poem.date | date_to_xmlschema }}">
                {{ poem.date | date: "%B %d" }}
            </time>
        </div>
        <p class="excerpt">{{ poem.excerpt | truncate: 150 }}</p>
    </article>
    {% endfor %}
    </div>
</div>
{% endfor %}

---

*Thank you for visiting. I hope you find something here that speaks to you.*
