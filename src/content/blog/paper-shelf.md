---
author: Kannav
pubDatetime: 2022-09-23T15:22:00Z
title: Shelf
postSlug: shelf
featured: true
draft: false
tags:
  - test
  - docs
ogImage: ""
description: A trial effort at collecting the stuff I have consumed
---

So it finally happened, someone other than [Raj](https://github.com/RajWorking) was interested in what CS stuff I had read.

This now warrants me trying to reconcile multiple sources to try to create a papershelf of sorts, but while I read a LOT of
papers, most of the content
I have been recently consuming is blogs and videos. Trying to link every engineering blog I have ever read is going to
be a uphill task but as a first step let me try to link blogs which I remember I read.
> It would be an interesting exercise if I could also link my copies of most papers with my notes, but for that need to
> find how to host them properly since raw dropbox links seem a bit too clunky


Videos are a bit simpler since most Engineering/CS related videos I watch are from channels I am subscribed to and now
my youtube history is going to
serve another purpose than just helping google advertise to me better.

It's gonna come off as a hotchpotch initally but I will try to impose an organizational structure of sorts especially on
different types of media:

## Papers

### Distributed Data systems (why "data"? because, martin kleppman said so)
- [The Google File system]()
    everybody reads this one, but one thing people don't know there is a very honest(and production ready, sort of) implemention of
    this paper online inform of the [Baidu File System](https://github.com/baidu/bfs). The code is surpisingly readable, especially
    if you're like me and can handle large amounts of C++ easily :p, plus it also gets cookie points for using multiple nameservers
    and sharding over them using raft. I would never recommend people to go look at the [Hadoop codebase]() but this is something that you can
    dive into and not get lost.

- [Paxos Made Simple]()
    again one paper every distributed systems engineer reads, but the newer kids go for something like

- [Raft]()
    which is ok but a well written pipelined paxos would ALWAYS be faster(can't change my mind). I still remember playing around with RaftScope after reading the paper and honestly helped me internalize the paper so much. Honestly the only way people write CP systems these days

    ![Raft thing](/raft-meme.jpg)

- [Dynamo Amazon’s Highly Available Key-value Store]()
    Not to be confused with DynamoDB, this is about the one Ring to rule them all, [literally!](https://github.com/Netflix/dynomite)

- [Amazon DynamoDB A Scalable, Predictably Performant, and Fully Managed NoSQL Database Service]()

- [Distributed Transactions at Scale in Amazon DynamoDB]()
    Completes the trilogy of the Dyanmo papers, goes to say how in a large enough systems Optimistic Concurrency Control is sort
    of always where you end up




### Distributed ML

### Classic ML(but what is classic anyways)

### Relational Databases

### Graphics

## Books

## Blogs

### Engineering Blogs

### Theory Blogs

### Graphics and Game Design

## Videos

### General Software(Backend-ish)

### C++

### Distributed Systems

### Graphics and Game Design

### System Design

### Frontned Arch

