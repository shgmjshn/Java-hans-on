# 第10章：クラスとオブジェクト  
― Javaは「設計図」と「実体」で考える ―

---

## この章のゴール 🎯

この章を終えると、次のことができるようになります。

- クラスとオブジェクトの違いを理解する
- フィールドとメソッドを定義できる
- `new` の意味を説明できる

---

## 1. なぜクラスが必要か

```java
String name;
int age;
```

人が増えると管理不能。

👉 **まとめて扱う必要がある**

---

## 2. クラスとは何か

クラスは **オブジェクトの設計図**

```java
class Person {
    String name;
    int age;
}
```

---

## 3. オブジェクトを作る

```java
Person p = new Person();
```

- `new`：実体を作る

---

## 4. フィールド操作

```java
p.name = "Alice";
p.age = 20;
```

---

## 5. メソッドを持たせる

```java
class Person {
    String name;
    int age;

    void introduce() {
        System.out.println(name + "です");
    }
}
```

---

## 6. コンストラクタ

```java
Person(String name, int age) {
    this.name = name;
    this.age = age;
}
```

---

## 7. this の意味

- このオブジェクト自身
- フィールドと引数の区別

---

## 8. カプセル化（入口）

- フィールドを直接触らせない
- メソッド経由で操作

👉 **次章につながる**

---

## 9. ハンズオン課題

1. `Book` クラス作成
2. コンストラクタ追加
3. 情報表示メソッドを作る

---

## 10. この章のまとめ

- クラス＝設計図
- オブジェクト＝実体
- **Javaの核心**

---

## 次章予告

次は **第11章：カプセル化** です。

- データを守る仕組み
- `private` と `public`
- Getter / Setter の役割

を扱います。

