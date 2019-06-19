SET foreign_key_checks = 0;
DROP TABLE IF EXISTS moneysniper.members;
DROP TABLE IF EXISTS moneysniper.roles;
DROP TABLE IF EXISTS moneysniper.stockholdings;
DROP TABLE IF EXISTS moneysniper.transactions;
DROP TABLE IF EXISTS moneysniper.member_datas;
DROP TABLE IF EXISTS moneysniper.posts;
DROP TABLE IF EXISTS moneysniper.stocks;
DROP TABLE IF EXISTS moneysniper.comments;
SET foreign_key_checks = 1;
-- 테이블 순서는 관계를 고려하여 한 번에 실행해도 에러가 발생하지 않게 정렬되었습니다.


-- members Table Create SQL
CREATE TABLE moneysniper.members
(
    `email`     VARCHAR(45)    NOT NULL    COMMENT '이메일', 
    `password`  VARCHAR(45)    NOT NULL    COMMENT '비밀번호', 
    PRIMARY KEY (email)
);

ALTER TABLE moneysniper.members COMMENT '회원';


-- roles Table Create SQL
CREATE TABLE moneysniper.roles
(
    `role_id`      INT                 NOT NULL    AUTO_INCREMENT COMMENT '권한 ID', 
    `post_role`    boolean             NULL        COMMENT '게시글(On, Off)', 
    `member_role`  boolean             NULL        COMMENT '회원(On, Off)', 
    PRIMARY KEY (role_id)
);

ALTER TABLE moneysniper.roles COMMENT '권한';


-- member_datas Table Create SQL
CREATE TABLE moneysniper.member_datas
(
    `email`    VARCHAR(45)    NOT NULL    COMMENT '이메일', 
    `name`     VARCHAR(45)    NULL        COMMENT '이름', 
    `age`      VARCHAR(45)    NULL        COMMENT '나이', 
    `gender`   VARCHAR(45)    NULL        COMMENT '성별', 
    `role_id`  INT            NULL        COMMENT '권한', 
    PRIMARY KEY (email)
);

ALTER TABLE moneysniper.member_datas COMMENT '회원정보';

ALTER TABLE moneysniper.member_datas
    ADD CONSTRAINT FK_member_datas_email_members_email FOREIGN KEY (email)
        REFERENCES moneysniper.members (email) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE moneysniper.member_datas
    ADD CONSTRAINT FK_member_datas_role_id_roles_role_id FOREIGN KEY (role_id)
        REFERENCES moneysniper.roles (role_id) ON DELETE CASCADE ON UPDATE CASCADE;


-- stocks Table Create SQL
CREATE TABLE moneysniper.stocks
(
    `stock_code`  INT            NOT NULL    AUTO_INCREMENT COMMENT '종목코드', 
    `corp_name`   VARCHAR(45)    NULL        COMMENT '회사명', 
    PRIMARY KEY (stock_code)
);

ALTER TABLE moneysniper.stocks COMMENT '주식 코드';


-- posts Table Create SQL
CREATE TABLE moneysniper.posts
(
    `post_id`      INT            NOT NULL    AUTO_INCREMENT COMMENT '게시글 ID', 
    `writer`       VARCHAR(45)    NOT NULL    COMMENT '작성자', 
    `uploaded_at`  VARCHAR(45)    NULL        COMMENT '작성일', 
    `contents`     VARCHAR(45)    NULL        COMMENT '내용(URI)', 
    `category`     INT            NULL        COMMENT '게시판 카테고리', 
    PRIMARY KEY (post_id)
);

ALTER TABLE moneysniper.posts COMMENT '게시판';

ALTER TABLE moneysniper.posts
    ADD CONSTRAINT FK_posts_writer_member_datas_email FOREIGN KEY (writer)
        REFERENCES moneysniper.member_datas (email) ON DELETE CASCADE ON UPDATE CASCADE;


-- comments Table Create SQL
CREATE TABLE moneysniper.comments
(
    `comment_id`   INT            NOT NULL    AUTO_INCREMENT COMMENT '댓글 ID', 
    `post_id`      INT            NULL        COMMENT '게시글 ID', 
    `contents`     VARCHAR(45)    NULL        COMMENT '내용', 
    `uploaded_at`  VARCHAR(45)    NULL        COMMENT '작성일', 
    `p_id`         INT            NULL        COMMENT 'PID', 
    `writer`       VARCHAR(45)    NULL        COMMENT '작성자', 
    PRIMARY KEY (comment_id)
);

ALTER TABLE moneysniper.comments COMMENT '댓글';

ALTER TABLE moneysniper.comments
    ADD CONSTRAINT FK_comments_post_id_posts_post_id FOREIGN KEY (post_id)
        REFERENCES moneysniper.posts (post_id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE moneysniper.comments
    ADD CONSTRAINT FK_comments_p_id_comments_comment_id FOREIGN KEY (p_id)
        REFERENCES moneysniper.comments (comment_id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE moneysniper.comments
    ADD CONSTRAINT FK_comments_writer_member_datas_email FOREIGN KEY (writer)
        REFERENCES moneysniper.member_datas (email) ON DELETE CASCADE ON UPDATE CASCADE;


-- transactions Table Create SQL
CREATE TABLE moneysniper.transactions
(
    `transaction_id`  INT                      NOT NULL    AUTO_INCREMENT COMMENT '거래 ID', 
    `date`            VARCHAR(45)              NULL        COMMENT '거래일', 
    `owner`           VARCHAR(45)              NULL        COMMENT '거래주', 
    `stock_code`      INT                      NULL        COMMENT '종목코드', 
    `amount`          INT                      NULL        COMMENT '거래 금액', 
    `type`            ENUM("buying", "selling")    NULL        COMMENT '거래 종류(매수, 매도)', 
    PRIMARY KEY (transaction_id)
);

ALTER TABLE moneysniper.transactions COMMENT '주식거래';

ALTER TABLE moneysniper.transactions
    ADD CONSTRAINT FK_transactions_owner_member_datas_email FOREIGN KEY (owner)
        REFERENCES moneysniper.member_datas (email) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE moneysniper.transactions
    ADD CONSTRAINT FK_transactions_stock_code_stocks_stock_code FOREIGN KEY (stock_code)
        REFERENCES moneysniper.stocks (stock_code) ON DELETE CASCADE ON UPDATE CASCADE;


-- stockholdings Table Create SQL
CREATE TABLE moneysniper.stockholdings
(
    `owner`       INT            NOT NULL    AUTO_INCREMENT COMMENT '소유자', 
    `stock_code`  INT            NOT NULL    COMMENT '종목 코드', 
    `amount`      INT            NULL        COMMENT '보유량', 
    PRIMARY KEY (owner, stock_code)
);

ALTER TABLE moneysniper.stockholdings COMMENT '보유 주식';

ALTER TABLE moneysniper.stockholdings
    ADD CONSTRAINT FK_stockholdings_owner_member_datas_email FOREIGN KEY (owner)
        REFERENCES moneysniper.member_datas (email) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE moneysniper.stockholdings
    ADD CONSTRAINT FK_stockholdings_stock_code_stocks_stock_code FOREIGN KEY (stock_code)
        REFERENCES moneysniper.stocks (stock_code) ON DELETE CASCADE ON UPDATE CASCADE;