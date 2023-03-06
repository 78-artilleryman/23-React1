# 마크다운 표기법 학습
React1 첫번 째 시간에는 버젼 넘버가 붙는 방법과 git이 무엇인지, 마지막으로  
Markdown이 무엇인지를 배웠습니다.  
원래 둘 째주에 Markdown 파일을 작성하는 것을 배우지만 수업에 참여를 못하는 관계로  
미리 예습을 해봤습니다.

# 제목(Title)
## 제목 2
### 제목 3
이런식으로 #으로는 최대 6개까지 쓸 수 있다. html에 h태그와 같다

# 문장(pararaph)
그냥 흔히 쓰는 문장 같은 경우는 지금과 같이 아무 기호없이 쓰면 된다

# 줄바꿈 (Line Breaks)
동해물과 백수산이 마르고 닳도록  
하느님이 보우하사 우리나라 만세

줄바꿈은 바꿀 위치에서 스페이스바 두번을 입력하거나, <br>태그를  
사용해서 줄바꿈을 해줄 수 있다.

# 강조(Emphasis)
_이텔릭_ 이텔릭체로 하려면 문장 앞뒤로 _를 붙여주면 된다.  
**두껍게** 글자를 두껍게 하려면 앞뒤로 **를 붙여주면 된다.  
~~취소선~~ 글자 가운데에 취소선을 그을려면 앞뒤로 ~~를 붙여주면 된다.  
<u>밑줄</u> 글자에 밑줄을 넣어주려면 u태그를 사용하면 된다.

# 목록(list)
1. 순서가 필요한 목록
1. 순서가 필요한 목록
1. 순서가 필요한 목록
이처럼 순서가 필요한 목록은 문장 맨 앞에 1.만 붙여주면 만들 수 있다.

1. 순서가 필요한 목록
    1. 순서가 필요한 목록
    1. 순서가 필요한 목록
1. 순서가 필요한 목록
이처럼 들여쓰기가 필요할땐 

- 순서가 필요없는 목록
이처럼 순서가 필요없는 목록을 사용할땐 -기호를 앞에 붙여서 사용하면 된다.

- 순서가 필요없는 목록
    - 순서가 필요없는 목록
    - 순서가 필요없는 목록
- 순서가 필요없는 목록

# 링크(Links)
[google](https://google.com)

[NAVER](https://naver.com "NVER로 이동!")

이처럼 글자에 링크를 부여하려면 []안에는 보여질 글자를 작성하고 ()안에는 링크 주소를  
넣어주면 글자에 링크가 담겨진다. 링크 주소 뒤에 ""를 불여 문장을 작성하면 마우스를 글자에  
올릴시 ""안에 작성한 문장이 나타난게 된다.

# 이미지(Images)
![우리집 땡이](https://postfiles.pstatic.net/MjAyMjEyMzFfMzkg/MDAxNjcyNDg4MDU3NzUw.wI7YafccBrk_NhiKBY6RdK7i2ywkn78Lzkr4nTs3f3cg.DQxXgx8zNtSyxQPyHaZhM9FiH0JXcMyPR-GmF20Vyasg.JPEG.ywy040150/KakaoTalk_20221231_205502800.jpg?type=w773)

이미지와 링크 넣는 것은 []와()를 사용하는 것인데 차이점이 있다.   
이미지를 삽입할땐 []앞에 !를 붙어줘야한다.

[![우리집 땡이](https://postfiles.pstatic.net/MjAyMjEyMzFfMzkg/MDAxNjcyNDg4MDU3NzUw.wI7YafccBrk_NhiKBY6RdK7i2ywkn78Lzkr4nTs3f3cg.DQxXgx8zNtSyxQPyHaZhM9FiH0JXcMyPR-GmF20Vyasg.JPEG.ywy040150/KakaoTalk_20221231_205502800.jpg?type=w773)](https://github.com/78-artilleryman/React-study)

이걸 응용해서 이미지안에 링크를 걸어줄 수도 있다.

# 인용문(BlockQuote)
> 남의 말이나 글에서 직접 또는 간접으로 따온 문장.  
> (네이버 국어 사전)

인용문 같은 경우는 >를 사용해서 표현할 수 있고,

> 인용문을 작성하세요!
>> 중첩
>>> 중첩1  
>>> 중첩2  
>>> 증첩3  

이런식으로 >의 갯수를 점점 늘려 중첩되게 인용문을 작성할 수 있다.

# 인라인(inline) 코드 강조

css에서 `bacground` 혹은
`background-image` 속성으로 요소에  
배경 이미지를 삽입할 수 있다.

# 블록(block) 코드 강조
```html
<a href="https://www.google.co.kr/"
target="_blank">GOOGLE</a>
```

```bash
$ git commit -m 'markdown'
```

이런식으로 ```사이에 코드를 입력할 수 있다

# 표(Table)

position 속성

값 | 의미 | 기본값  
-- | --| --
static | 기준 없음 | O
relative | 요소 자신 | X
absolute | 위치 상 부모 요소 | X
fixed | 뷰포트 | X

표같은 경우는 | 기호를 사용해서 만들 수 있는데 표에 머리부분을 만들려면  
-- | --| -- 이런식으로 사용해서 머리부분을 구분해 줄 수 있다.

값 | 의미 | 기본값  
:-- | :--:| --:
static | 기준 없음 | O
relative | 요소 자신 | X
absolute | 위치 상 부모 요소 | X
fixed | 뷰포트 | X

이 표에서는 글자 정렬도 시켜줄 수가 있는데 왼쪽 정렬은 --기호 왼쪽에 : 하나만 붙여주고  
오른쪽 정렬은 --오른쪽에 :를 하나만 붙여주고  
가운데 정렬은 --양쪽에 :를 붙여서 시켜주면 된다.

# 수평선(Horizontal Rule)
---
***
___
-,*,_를 세번 연속으로 작성하면 구분선으로 쓸 수 있다.



