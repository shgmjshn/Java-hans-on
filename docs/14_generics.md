# 第14章：ジェネリクス  
― 「型安全」を仕組みで実現する ―

---

## この章のゴール 🎯

この章を終えると、次のことができるようになります。

- ジェネリクスの目的を説明できる
- `<T>` の意味がわかる
- `List<String>` が安全な理由を理解できる
- キャスト不要な設計ができる

---

## 1. ジェネリクスが必要な理由

ジェネリクスが無いと：

```java
List list = new ArrayList();
list.add("Java");
list.add(10);

String s = (String) list.get(0); // 実行時エラーの可能性
```

問題点：

- 何が入っているか分からない
- キャストが必要
- バグが実行時まで分からない

👉 **安全ではない**

---

## 2. ジェネリクスとは何か

**型を後から指定できる仕組み**

```java
List<String> list = new ArrayList<>();
```

- `String` 以外は入れられない
- 間違いは **コンパイル時** に検出

---

## 3. ジェネリクスの基本構文

`クラス名<型引数>`

例：

```java
List<Integer> numbers = new ArrayList<>();
```

---

## 4. <T> の意味

```java
class Box<T> {
    private T value;

    void set(T value) {
        this.value = value;
    }

    T get() {
        return value;
    }
}
```

- `T` は型の変数
- 使う側が型を決める

---

## 5. ジェネリクスクラスの利用

```java
Box<String> box = new Box<>();
box.set("Hello");

String s = box.get();
```

👉 **キャスト不要・安全**

---

## 6. ジェネリクスメソッド

```java
static <T> void print(T value) {
    System.out.println(value);
}
```

---

## 7. 制限付きジェネリクス

```java
static <T extends Number> void printNumber(T n) {
    System.out.println(n);
}
```

- `Number` のサブクラスのみ許可

---

## 8. ワイルドカード

```java
List<?> list;
List<? extends Number> nums;
```

- API設計で重要
- 読み取り中心

---

## 9. ハンズオン課題

1. `raw`型とジェネリクスの違いを確認
2. `Box<T>` を実装して使う
3. `Number`制約のメソッド作成

---

## 10. この章のまとめ

- ジェネリクスは型安全の要
- 実行前にバグを防ぐ
- **Javaの信頼性の核心**

---

## 次章予告

次は **第15章：Stream API** です。

- `for` 文を書かずにデータを処理する
- `map` / `filter` の使い方
- 読みやすいコードを書く技術

を扱います。

