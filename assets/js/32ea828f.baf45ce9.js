(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),s=n(7),i=(n(0),n(113)),l=["components"],c={title:"Postgresql, Miracles Queries",slug:"postgres-miracles-queries"},r={unversionedId:"tech_posts/2021-04-23-miracles-queries-postgres",id:"tech_posts/2021-04-23-miracles-queries-postgres",isDocsHomePage:!1,title:"Postgresql, Miracles Queries",description:"Table of contents",source:"@site/docs/tech_posts/2021-04-23-miracles-queries-postgres.mdx",slug:"/tech_posts/postgres-miracles-queries",permalink:"/docs/tech_posts/postgres-miracles-queries",editUrl:"https://github.com/CraftDataEngineer/blog/docs/tech_posts/2021-04-23-miracles-queries-postgres.mdx",version:"current",sidebar:"docs",previous:{title:"Comparaison d'outils pour documentation + blogs",permalink:"/docs/tech_posts/2021-03-16-comparaison-outils-documentation"},next:{title:"Getting Started",permalink:"/docs/starter/getting-started"}},b=[{value:"Table of contents",id:"table-of-contents",children:[]},{value:"Magic queries",id:"magic-queries",children:[{value:"The pg_stat_statements View",id:"the-pg_stat_statements-view",children:[]},{value:"pg_class:",id:"pg_class",children:[]},{value:"Magic indexes query:",id:"magic-indexes-query",children:[]}]},{value:"Observations:",id:"observations",children:[]},{value:"Env setup:",id:"env-setup",children:[{value:"Prerequisite",id:"prerequisite",children:[]}]}],o={toc:b};function p(e){var t=e.components,n=Object(s.a)(e,l);return Object(i.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"table-of-contents"},"Table of contents"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#magic-queries"},"Magic queries")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#env-setup"},"Env setup"))),Object(i.b)("h2",{id:"magic-queries"},"Magic queries"),Object(i.b)("h3",{id:"the-pg_stat_statements-view"},"The pg_stat_statements View"),Object(i.b)("hr",null),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sql"},'postgres=# \\d pg_stat_statements\n                    View "public.pg_stat_statements"\n       Column        |       Type       | Collation | Nullable | Default\n---------------------+------------------+-----------+----------+---------\n userid              | oid              |           |          |\n dbid                | oid              |           |          |\n queryid             | bigint           |           |          |\n query               | text             |           |          |\n plans               | bigint           |           |          |\n total_plan_time     | double precision |           |          |\n min_plan_time       | double precision |           |          |\n max_plan_time       | double precision |           |          |\n mean_plan_time      | double precision |           |          |\n stddev_plan_time    | double precision |           |          |\n calls               | bigint           |           |          |\n total_exec_time     | double precision |           |          |\n min_exec_time       | double precision |           |          |\n max_exec_time       | double precision |           |          |\n mean_exec_time      | double precision |           |          |\n stddev_exec_time    | double precision |           |          |\n rows                | bigint           |           |          |\n shared_blks_hit     | bigint           |           |          |\n shared_blks_read    | bigint           |           |          |\n shared_blks_dirtied | bigint           |           |          |\n shared_blks_written | bigint           |           |          |\n local_blks_hit      | bigint           |           |          |\n local_blks_read     | bigint           |           |          |\n local_blks_dirtied  | bigint           |           |          |\n local_blks_written  | bigint           |           |          |\n temp_blks_read      | bigint           |           |          |\n temp_blks_written   | bigint           |           |          |\n blk_read_time       | double precision |           |          |\n blk_write_time      | double precision |           |          |\n wal_records         | bigint           |           |          |\n wal_fpi             | bigint           |           |          |\n wal_bytes           | numeric          |           |          |\n')),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},Object(i.b)("a",{parentName:"em",href:"https://postgresql.kr/docs/9.1/pgstatstatements.html"},"Columns explanation of pg_stat_statements"))),Object(i.b)("p",null,"The good one \ud83e\udd47:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sql"},"SELECT  substring(query,1,50) AS short_query,\n        round(total_exec_time::numeric, 2) AS total_exec_time, \n        calls,\n        round(mean_exec_time::numeric,2) AS mean, \n        round((100*total_exec_time/sum(total_exec_time::numeric) OVER ())::numeric,2) AS percentage_overall\nFROM pg_stat_statements \nORDER BY total_exec_time DESC LIMIT 20;\n")),Object(i.b)("p",null,"Source : "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=5M2FFbVeLSs&t=766s"},"PostgreSQL performance in 5 minutes"))),Object(i.b)("p",null,"It gives something like this:"),Object(i.b)("hr",null),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"-[ RECORD 1 ]------+---------------------------------------------------\nshort_query        | UPDATE pgbench_accounts SET abalance = abalance +\ntotal_exec_time    | 207576.31\ncalls              | 100000\nmean               | 2.08\npercentage_overall | 37.80\n-[ RECORD 2 ]------+---------------------------------------------------\nshort_query        | UPDATE pgbench_branches SET bbalance = bbalance +\ntotal_exec_time    | 136519.42\ncalls              | 100000\nmean               | 1.37\npercentage_overall | 24.86\n-[ RECORD 3 ]------+---------------------------------------------------\nshort_query        | UPDATE pgbench_tellers SET tbalance = tbalance + $\ntotal_exec_time    | 82782.97\ncalls              | 100000\nmean               | 0.83\npercentage_overall | 15.07\n-[ RECORD 4 ]------+---------------------------------------------------\nshort_query        | SELECT abalance FROM pgbench_accounts WHERE aid =\ntotal_exec_time    | 53201.69\ncalls              | 100000\nmean               | 0.53\npercentage_overall | 9.69\n")),Object(i.b)("h3",{id:"pg_class"},"pg_class:"),Object(i.b)("hr",null),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sql"},"SELECT relname as name, relkind as kind, reltuples as estimation_number_lines, relpages as estimation_size_on_disk\nFROM pg_class\nWHERE relname LIKE 'pgbench%';\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"         name          | kind | estimation_number_lines | estimation_size_on_disk\n-----------------------+------+-------------------------+-------------------------\n pgbench_accounts      | r    |                   5e+06 |                   81968\n pgbench_accounts_pkey | i    |                   5e+06 |                   13713\n pgbench_branches      | r    |                      50 |                      65\n pgbench_branches_pkey | i    |                      50 |                       2\n pgbench_history       | r    |                   99640 |                     716\n pgbench_tellers       | r    |                     500 |                      45\n pgbench_tellers_pkey  | i    |                     500 |                       5\n")),Object(i.b)("p",null,"Make ",Object(i.b)("strong",{parentName:"p"},"estimation")," on the number of lines and disk size \ud83d\udcbf."),Object(i.b)("p",null,"Rows are updated by operations : ",Object(i.b)("inlineCode",{parentName:"p"},"VACUUM, ANALYZE...")),Object(i.b)("p",null,"source : ",Object(i.b)("a",{parentName:"p",href:"https://www.postgresql.org/docs/13/planner-stats.html#id-1.5.13.5.3"},"https://www.postgresql.org/docs/13/planner-stats.html#id-1.5.13.5.3")),Object(i.b)("h3",{id:"magic-indexes-query"},"Magic indexes query:"),Object(i.b)("hr",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Missing indexes can fix 70% of all performance problems")),Object(i.b)("p",null,"To diagnoses index problem we can select this table : "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sql"},'postgres=# \\d pg_stat_user_tables\n                      View "pg_catalog.pg_stat_user_tables"\n       Column        |           Type           | Collation | Nullable | Default\n---------------------+--------------------------+-----------+----------+---------\n relid               | oid                      |           |          |\n schemaname          | name                     |           |          |\n relname             | name                     |           |          |\n seq_scan            | bigint                   |           |          |\n seq_tup_read        | bigint                   |           |          |\n idx_scan            | bigint                   |           |          |\n idx_tup_fetch       | bigint                   |           |          |\n n_tup_ins           | bigint                   |           |          |\n n_tup_upd           | bigint                   |           |          |\n n_tup_del           | bigint                   |           |          |\n n_tup_hot_upd       | bigint                   |           |          |\n n_live_tup          | bigint                   |           |          |\n n_dead_tup          | bigint                   |           |          |\n n_mod_since_analyze | bigint                   |           |          |\n last_vacuum         | timestamp with time zone |           |          |\n last_autovacuum     | timestamp with time zone |           |          |\n last_analyze        | timestamp with time zone |           |          |\n last_autoanalyze    | timestamp with time zone |           |          |\n vacuum_count        | bigint                   |           |          |\n autovacuum_count    | bigint                   |           |          |\n analyze_count       | bigint                   |           |          |\n autoanalyze_count   | bigint                   |           |          |\n')),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://www.postgresql.org/docs/13/monitoring-stats.html#MONITORING-PG-STAT-ALL-TABLES-VIEW"},"pg_stat_all_tables")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=5M2FFbVeLSs&t=1000s"},"16min30")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sql"},"SELECT schemaname, relname, seq_scan, seq_tup_read, idx_scan, seq_tup_read / seq_scan as avg FROM pg_stat_user_tables WHERE seq_scan > 0 ORDER BY seq_tup_read DESC;\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"-[ RECORD 1 ]+-----------------\nschemaname   | public\nrelname      | pgbench_accounts\nseq_scan     | 2\nseq_tup_read | 5000000\nidx_scan     | 200000\navg          | 2500000\n-[ RECORD 2 ]+-----------------\nschemaname   | public\nrelname      | t_person\nseq_scan     | 3\nseq_tup_read | 5000000\nidx_scan     |\navg          | 1666666\n-[ RECORD 3 ]+-----------------\nschemaname   | public\nrelname      | pgbench_branches\nseq_scan     | 45684\nseq_tup_read | 2284200\nidx_scan     | 54318\navg          | 50\n")),Object(i.b)("h2",{id:"observations"},"Observations:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Usually those tables listed here will show up in pg_stat_statements too")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You usually see: "),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Potential missing indexes "),Object(i.b)("li",{parentName:"ul"},"Pointless operations")))),Object(i.b)("p",null,"\u2192  candidate missing index "),Object(i.b)("h2",{id:"env-setup"},"Env setup:"),Object(i.b)("h3",{id:"prerequisite"},"Prerequisite"),Object(i.b)("hr",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Docker installed")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},'docker run --name postgres -p 5432:5432  -e POSTGRES_PASSWORD="0205" -e POSTGRES_SHARED_PRELOAD_LIBRARIES=pg_stat_statements postgres -c shared_preload_libraries=pg_stat_statements -c pg_stat_statements.track=all -c max_connections=200\n')),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"# Password is 0205\npsql -h 0.0.0.0 -d postgres -U postgres \n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sql"},"# You have to enable this extension if it is not already enabled\nCREATE EXTENSION pg_stat_statements; \n\nSELECT * FROM pg_stat_statements;\n")))}p.isMDXComponent=!0}}]);