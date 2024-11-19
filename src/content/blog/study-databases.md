---
author: Kannav
pubDatetime: 2022-09-23T15:22:00Z
title: Where to study databases from
postSlug: databases-study
featured: false
draft: true
tags:
  - papershelf
ogImage: ""
description: Where does this show up
---

# Where to study it from? Databases


1. Data Structures

   1. BTrees, Bplus Trees
   2. LSM Trees, SSTables
   3. Hash Indexing
   4. Systems:
      1. LevelDB,
      2. RocksDB

2. Database theory

   1. Database storage, Data layout: Row and Column Stores
   2. Database compression
   3. Database Indexes
   4. Sorting and Aggregation
   5. Joins
   6. Query Execution
   7. Vectorization
   8. Query Optimizer
   9. In Memory Databases

3. Concurrency

   1. Time Ordered Concurrency control
   2. 2Phase locking
   3. MVCC
   4. Parallel Joins (Sort vs Hashing)
   5. ACID Trasactions

4. Distributed
   1. Networking and RPC
   2. Consistency and Availability
   3. Distributed OLTP
      1. 2PC
      2. Raft and Paxos
      3. Chubby -> Zookeeper
   4. Distributed OLAP
      1. Map Reduce
      2. Dremel -> Big Query
      3. Spark
      4. Snowflake
   5. systems
      1. GFS -> Hadoop
      2. BigTable -> HBase
      3. Spanner -> CockroackDB, TiDB
      4. DynamoDB -> MongoDB
