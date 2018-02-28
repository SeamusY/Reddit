--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.11
-- Dumped by pg_dump version 9.5.11

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: replies; Type: TABLE; Schema: public; Owner: seamus
--

CREATE TABLE replies (
    id integer NOT NULL,
    user_id integer,
    thread_id integer,
    comment text,
    rating integer
);


ALTER TABLE replies OWNER TO seamus;

--
-- Name: replies_id_seq; Type: SEQUENCE; Schema: public; Owner: seamus
--

CREATE SEQUENCE replies_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE replies_id_seq OWNER TO seamus;

--
-- Name: replies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: seamus
--

ALTER SEQUENCE replies_id_seq OWNED BY replies.id;


--
-- Name: threads; Type: TABLE; Schema: public; Owner: seamus
--

CREATE TABLE threads (
    id integer NOT NULL,
    topic text,
    creator_id integer
);


ALTER TABLE threads OWNER TO seamus;

--
-- Name: threads_id_seq; Type: SEQUENCE; Schema: public; Owner: seamus
--

CREATE SEQUENCE threads_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE threads_id_seq OWNER TO seamus;

--
-- Name: threads_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: seamus
--

ALTER SEQUENCE threads_id_seq OWNED BY threads.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE users (
    id integer NOT NULL,
    name character varying,
    email character varying
);


ALTER TABLE users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE users_id_seq OWNED BY users.id;


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: seamus
--

ALTER TABLE ONLY replies ALTER COLUMN id SET DEFAULT nextval('replies_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: seamus
--

ALTER TABLE ONLY threads ALTER COLUMN id SET DEFAULT nextval('threads_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users ALTER COLUMN id SET DEFAULT nextval('users_id_seq'::regclass);


--
-- Data for Name: replies; Type: TABLE DATA; Schema: public; Owner: seamus
--

COPY replies (id, user_id, thread_id, comment, rating) FROM stdin;
1	\N	\N	{"description":"test"}	\N
2	\N	\N	SEND	\N
3	\N	\N	SEND	\N
4	\N	\N	BUTT	\N
5	35	2	ASS	\N
6	35	2	THIS SUCKS	\N
7	35	2	RUN	\N
8	35	2	KIND	\N
9	35	2	DD	\N
10	35	2	DD	\N
11	35	2	AA	\N
12	35	2	AA	\N
13	35	2	AA	\N
14	35	2	aaaaaaaaaa	\N
15	35	2	zzzzz	\N
16	35	2	zzzzz	\N
17	35	2	zzzzz	\N
18	35	2	GG	\N
19	35	2	N	\N
20	35	2	POP	\N
21	35	2	POP	\N
22	35	2	POP	\N
23	35	2	POP	\N
24	35	2	HM	\N
25	35	2	HM	\N
26	35	2	HM	\N
27	35	2	HM	\N
28	35	2	HM	\N
29	35	2	HM	\N
30	35	2	MEH	\N
31	35	2	MEH	\N
32	35	2	MEH	\N
33	35	2	MEH	\N
34	35	2	MEH	\N
35	35	2	MEH	\N
36	35	2	MEH	\N
37	35	2	MEH	\N
38	35	2	MEH	\N
39	35	2	MEH	\N
40	35	2	MEH	\N
41	35	2	MEH	\N
42	35	2	MEH	\N
43	35	2	MEH	\N
44	35	2	MEH	\N
45	35	2	MEH	\N
46	35	2	PP	\N
47	35	2	H	\N
48	35	2	H	\N
49	35	2	H	\N
50	35	2	ANSWER ME	\N
51	35	2	ANSWER ME	\N
52	35	2	ANSWER ME	\N
53	35	2	ANSWER ME	\N
54	35	2	ANSWER ME	\N
55	35	2	ANSWER ME	\N
56	35	2	ANSWER ME	\N
57	35	2	ANSWER 	\N
58	35	2	GG	\N
59	35	2	RENDER	\N
60	35	2	MINE	\N
61	35	2	GG	\N
62	35	2	G	\N
63	35	2	L	\N
64	35	2	NOW	\N
\.


--
-- Name: replies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: seamus
--

SELECT pg_catalog.setval('replies_id_seq', 64, true);


--
-- Data for Name: threads; Type: TABLE DATA; Schema: public; Owner: seamus
--

COPY threads (id, topic, creator_id) FROM stdin;
2	introduction	\N
3	terminal	\N
5	installation	\N
6	github	\N
7	exercism	\N
8	html	\N
9	css	\N
10	js	\N
11	functions	\N
12	loops	\N
13	bootstrap	\N
14	grid	\N
15	widget	\N
16	website	\N
17	revision1	\N
\.


--
-- Name: threads_id_seq; Type: SEQUENCE SET; Schema: public; Owner: seamus
--

SELECT pg_catalog.setval('threads_id_seq', 17, true);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY users (id, name, email) FROM stdin;
1	Jack	Jack@gmail.com
2	JAMES	JACK@gmail.com
35		seamus.y2016@gmail.com
68	Jasmine	J@gmail.com
\.


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('users_id_seq', 68, true);


--
-- Name: replies_pkey; Type: CONSTRAINT; Schema: public; Owner: seamus
--

ALTER TABLE ONLY replies
    ADD CONSTRAINT replies_pkey PRIMARY KEY (id);


--
-- Name: threads_pkey; Type: CONSTRAINT; Schema: public; Owner: seamus
--

ALTER TABLE ONLY threads
    ADD CONSTRAINT threads_pkey PRIMARY KEY (id);


--
-- Name: users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

