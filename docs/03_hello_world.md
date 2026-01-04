# 第3章：Hello World  
― Javaが動く瞬間を理解する ―

---

## この章のゴール 🎯

- Javaプログラムの実行の流れを説明できる
- Hello World を自分で書いて動かせる
- コンパイルと実行の違いがわかる

---

## 1. Javaプログラムの流れ

```text
HelloWorld.java
   ↓ javac
HelloWorld.class
   ↓ java
実行結果
```

Javaは **必ずコンパイルが必要** です。

---

## 2. 最初のプログラムを書く

### ファイル名

`HelloWorld.java`

### 中身

```java
class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
```

---

## 3. コードの意味（最小限）

- `class`：設計図
- `main`：開始地点
- `println`：画面に表示

---

## 4. コンパイル

ターミナルで実行：

```bash
javac HelloWorld.java
```

成功すると `.class` ファイルが生成されます。

---

## 5. 実行

ターミナルで実行：

```bash
java HelloWorld
```

👉 **拡張子は不要**

---

## 6. よくあるエラー

- クラス名とファイル名が違う
- `java HelloWorld.java` と実行する（拡張子をつけてしまう）
- `main` メソッドが無い

---

## 7. ハンズオン課題

1. 表示する文字を変える
2. 2行表示する
3. 引数を表示する

---

## 8. この章のまとめ

- Javaはコンパイル言語
- 実行は `main` から
- まず「動かす」ことが重要

---

## 次章予告

次は **第4章：基本文法（変数と型）** です。

- データを記憶する「箱」を作る
- 数値と文字の違い
- 計算してみる

を扱います。
