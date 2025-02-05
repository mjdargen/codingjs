module.exports = [
  {
    title: 'String-1',
    name: 'right2',
    inputs: [
      "('Hello')",
      "('java')",
      "('Hi')",
      "('code')",
      "('cat')",
      "('12345')",
    ],
    question: `Given a string, return a "rotated right 2" version where the
                  last 2 chars are moved to the start. The string length will be at least 2.`,
  }, {
    title: 'String-1',
    name: 'theEnd',
    inputs: [
      "('Hello', true)",
      "('Hello', false)",
      "('oh', true)",
      "('oh', false)",
      "('x', true)",
      "('x', false)",
      "('java', true)",
      "('chocolate', false)",
      "('1234', true)",
      "('code', false)",
    ],
    question: `Given a string, return a string length 1 from its front,
            unless front is false, in which case return a string length 1 from its
            back. The string will be non-empty.`,
  }, {
    title: 'String-1',
    name: 'withoutEnd2',
    inputs: [
      "('Hello')",
      "('abc')",
      "('ab')",
      "('a')",
      "('')",
      "('coldy')",
      "('java code')",
    ],
    question: `Given a string, return a version without both the first and
              last char of the string. The string may be any length, including 0.`,
  }, {
    title: 'String-1',
    name: 'middleTwo',
    inputs: [
      "('string')",
      "('code')",
      "('Practice')",
      "('ab')",
      "('123456789')",
    ],
    question: `Given a string of even length, return a string made of the middle two chars, so the string "string" yields "ri".
              The string length will be at least 2.`,
  }, {
    title: 'String-1',
    name: 'comboString',
    inputs: [
      "('Hello', 'hi')",
      "('Hi', 'Hello')",
      "('aaa', 'b')",
      "('b', 'aaa')",
      "('aaa', '')",
      "('', 'bb')",
      "('aaa', '1234')",
      "('aaa', 'bb')",
      "('a', 'bb')",
      "('bb', 'a')",
      "('a', 'bb')",
      "('xyz', 'ab')",
    ],
    question: `Given 2 strings, a and b, return a string of the form short+long+short,
                with the shorter string on the outside and the longer string on the inside.
                The strings will not be the same length, but they may be empty (length 0).`,
  }, {
    title: 'String-1',
    name: 'endsLy',
    inputs: [
      "('oddly')",
      "('y')",
      "('oddl')",
      "('olydd')",
      "('ly')",
      "('')",
      "('falsely')",
      "('evenly')",
    ],
    question: 'Given a string, return true if it ends in "ly".',
  }, {
    title: 'String-1',
    name: 'nTwice',
    inputs: [
      "('hello', 2)",
      "('Chocolate', 3)",
      "('Chocolate', 1)",
      "('Chocolate', 0)",
      "('Hello', 4)",
      "('Code', 4)",
      "('Code', 2)",
    ],
    index: 62,
    question: `Given a string and an int n, return a string made of the
              first and last n chars from the string. The string length will be at least n.`,
  },
  {
    title: 'String-1',
    name: 'twoChar',
    question: `Given a string and an index, return a string length 2
            starting at the given index. If the index is too big or too small to define
            a string length 2, use the first 2 chars. The string length will be at least 2.`,
    inputs: [
      "('java', 0)",
      "('java', 2)",
      "('java', 3)",
      "('java', 4)",
      "('java', -1)",
      "('Hello', 0)",
      "('Hello', 1)",
      "('Hello', 99)",
      "('Hello', 3)",
      "('Hello', 4)",
      "('Hello', 5)",
      "('Hello', -7)",
      "('Hello', 6)",
      "('Hello', -1)",
      "('yay', 0)",
    ],
  },
  {
    title: 'String-1',
    name: 'middleThree',
    question: `Given a string of odd length, return the string length 3 from its middle, so "Candy" yields "and".
             The string length will be at least 3.`,
    inputs: [
      "('Candy')",
      "('and')",
      "('solving')",
      "('Hi yet Hi')",
      "('java yet java')",
      "('Chocolate')",
      "('XabcxyzabcX')",
    ],
  },
  {
    title: 'String-1',
    name: 'hasBad',
    question: `Given a string, return true if "bad" appears starting at index 0
            or 1 in the string, such as with "badxxx" or "xbadxx" but not "xxbadxx". The
            string may be any length, including 0.`,
    inputs: [
      "('badxx')",
      "('xbadxx')",
      "('xxbadxx')",
      "('code')",
      "('bad')",
      "('ba')",
      "('xba')",
      "('xbad')",
      "('')",
      "('badyy')",
    ],
  },
  {
    title: 'String-1',
    name: 'atFirst',
    question: `Given a string, return a string length 2 made of its first 2 chars.
            If the string length is less than 2, use '@' for the missing chars.`,
    inputs: [
      "('hello')",
      "('hi')",
      "('h')",
      "('')",
      "('kitten')",
      "('java')",
      "('j')",
    ],
  },
  {
    title: 'String-1',
    name: 'lastChars',
    question: `Given 2 strings, a and b, return a new string made of the first char of a
            and the last char of b, so "yo" and "java" yields "ya". If either string is length
            0, use '@' for its missing char.`,
    inputs: [
      "('last', 'chars')",
      "('yo', 'java')",
      "('hi', '')",
      "('', 'hello')",
      "('', '')",
      "('kitten', 'hi')",
      "('k', 'zip')",
      "('kitten', '')",
      "('kitten', 'zip')",
    ],
  },
  {
    title: 'String-1',
    name: 'conCat',
    question: `Given two strings, append them together (known as "concatenation")
            and return the result. However, if the concatenation creates a double-char,
            then omit one of the chars, so "abc" and "cat" yields "abcat".`,
    inputs: [
      "('abc', 'cat')",
      "('dog', 'cat')",
      "('abc', '')",
      "('', 'cat')",
      "('pig', 'g')",
      "('pig', 'doggy')",
    ],
  },
  {
    title: 'String-1',
    name: 'lastTwo',
    question: `Given a string of any length, return a new string where the last 2
            chars, if present, are swapped, so "coding" yields "codign".`,
    inputs: [
      "('coding')",
      "('cat')",
      "('ab')",
      "('a')",
      "('')",
    ],
  },
  {
    title: 'String-1',
    name: 'seeColor',
    question: `Given a string, if the string begins with "red" or "blue" return
            that color string, otherwise return the empty string.`,
    inputs: [
      "('redxx')",
      "('xxred')",
      "('blueTimes')",
      "('NoColor')",
      "('red')",
      "('re')",
      "('blu')",
      "('blue')",
      "('a')",
      "('')",
      "('xyzred')",
    ],
  },
  {
    title: 'String-1',
    name: 'frontAgain',
    question: `Given a string, return true if the first 2 chars in the string
            also appear at the end of the string, such as with "edited".`,
    inputs: [
      "('edited')",
      "('edit')",
      "('ed')",
      "('jj')",
      "('jjj')",
      "('jjjj')",
      "('jjjk')",
      "('x')",
      "('')",
      "('java')",
      "('javaja')",
    ],
  },
  {
    title: 'String-1',
    name: 'minCat',
    question: `Given two strings, append them together (known as "concatenation")
            and return the result. However, if the strings are different lengths, omit chars
            from the longer string so it is the same length as the shorter string. So "Hello"
            and "Hi" yield "loHi". The strings may be any length.`,
    inputs: [
      "('Hello', 'Hi')",
      "('Hello', 'java')",
      "('java', 'Hello')",
      "('abc', 'x')",
      "('x', 'abc')",
      "('abc', '')",
    ],
  },
  {
    title: 'String-1',
    name: 'extraFront',
    question: `Given a string, return a new string made of 3 copies of the first 2
            chars of the original string. The string may be any length. If there are fewer than 2
            chars, use whatever is there.`,
    inputs: [
      "('Hello')",
      "('ab')",
      "('H')",
      "('')",
      "('Candy')",
      "('Code')",
    ],
  },
  {
    title: 'String-1',
    name: 'without2',
    question: `Given a string, if a length 2 substring appears at both its beginning and
    end, return a string without the substring at the beginning, so "HelloHe" yields
    "lloHe". The substring may overlap with itself, so "Hi" yields "". Otherwise, return
    the original string unchanged.`,
    inputs: [
      "('HelloHe')",
      "('HelloHi')",
      "('Hi')",
      "('Chocolate')",
      "('xxx')",
      "('xx')",
      "('x')",
      "('')",
      "('Fruits')",
    ],
  },
  {
    title: 'String-1',
    name: 'deFront',
    question: `Given a string, return a version without the first 2 chars. Except keep the
    first char if it is 'a' and keep the second char if it is 'b'. The string may be any
    length. Harder than it looks.`,
    inputs: [
      "('Hello')",
      "('java')",
      "('away')",
      "('axy')",
      "('abc')",
      "('xby')",
      "('ab')",
      "('ax')",
      "('axb')",
      "('aaa')",
      "('xbc')",
      "('bbb')",
      "('bazz')",
      "('ba')",
      "('abxyz')",
      "('hi')",
      "('his')",
      "('xz')",
      "('zzz')",
    ],
  },
  {
    title: 'String-1',
    name: 'startWord',
    question: `Given a string and a second "word" string, we'll say that the word matches
    the string if it appears at the front of the string, except its first char does not
    need to match exactly. On a match, return the front of the string, or otherwise return
    the empty string. So, so with the string "hippo" the word "hi" returns "hi" and "xip"
    returns "hip". The word will be at least length 1.`,
    inputs: [
      "('hippo', 'hi')",
      "('hippo', 'xip')",
      "('hippo', 'i')",
      "('hippo', 'ix')",
      "('h', 'ix')",
      "('', 'i')",
      "('hip', 'zi')",
      "('hip', 'zip')",
      "('hip', 'zig')",
      "('h', 'z')",
      "('hippo', 'xippo')",
      "('hippo', 'xyz')",
      "('hippo', 'hip')",
      "('kitten', 'cit')",
      "('kit', 'cit')",
    ],
  },
  {
    title: 'String-1',
    name: 'withoutX',
    question: `Given a string, if the first or last chars are 'x', return the string
    without those 'x' chars, and otherwise return the string unchanged.`,
    inputs: [
      "('xHix')",
      "('xHi')",
      "('Hxix')",
      "('Hi')",
      "('xxHi')",
      "('Hix')",
      "('xaxbx')",
      "('xx')",
      "('x')",
      "('')",
      "('Hello')",
      "('Hexllo')",
    ],
  },
  {
    title: 'String-1',
    name: 'withoutX2',
    question: `Given a string, if one or both of the first 2 chars is 'x', return the
    string without those 'x' chars, and otherwise return the string unchanged. This
    is a little harder than it looks.`,
    inputs: [
      "('xHi')",
      "('Hxi')",
      "('Hi')",
      "('xxHi')",
      "('Hix')",
      "('xaxb')",
      "('xx')",
      "('x')",
      "('')",
      "('Hello')",
      "('Hexllo')",
      "('xHxllo')",
    ],
  },
  {
    question: "Given a string, return a string where for every char in the original, there are two chars.",
    title: "String-2",
    name: "doubleChar",
    inputs: [
      "('The')",
      "('AAbb')",
      "('Hi-There')",
      "('Word!')",
      "('!!')",
      "('')",
      "('a')",
      "('.')",
      "('aa')",
    ]
  },
  {
    question: "Return the number of times that the string \"hi\" appears anywhere in the given string.",
    title: "String-2",
    name: "countHi",
    inputs: [
      "('abc hi ho')",
      "('ABChi hi')",
      "('hihi')",
      "('hiHIhi')",
      "('')",
      "('h')",
      "('hi')",
      "('Hi is no HI on ahI')",
      "('hiho not HOHIhi')",
    ]
  },
  {
    question: "Return true if the string \"cat\" and \"dog\" appear the same number of times in the given string.",
    title: "String-2",
    name: "catDog",
    inputs: [
      "('catdog')",
      "('catcat')",
      "('1cat1cadodog')",
      "('catxxdogxxxdog')",
      "('catxdogxdogxcat')",
      "('catxdogxdogxca')",
      "('dogdogcat')",
      "('dogogcat')",
      "('dog')",
      "('cat')",
      "('ca')",
      "('c')",
      "('')",
    ]
  },
  {
    question: "Return the number of times that the string \"code\" appears anywhere in the given string, except we'll accept any letter for the 'd', so \"cope\" and \"cooe\" count.",
    title: "String-2",
    name: "countCode",
    inputs: [
      "('aaacodebbb')",
      "('codexxcode')",
      "('cozexxcope')",
      "('cozfxxcope')",
      "('xxcozeyycop')",
      "('cozcop')",
      "('abcxyz')",
      "('code')",
      "('ode')",
      "('c')",
      "('')",
      "('AAcodeBBcoleCCccoreDD')",
      "('AAcodeBBcoleCCccorfDD')",
      "('coAcodeBcoleccoreDD')",
    ]
  },
  {
    question: "Given two strings, return true if either of the strings appears at the very end of the other string, ignoring upper/lower case differences (in other words, the computation should not be \"case sensitive\"). Note:  str.toLowerCase() returns the lowercase version of a string.",
    title: "String-2",
    name: "endOther",
    inputs: [
      "('Hiabc', 'abc')",
      "('AbC', 'HiaBc')",
      "('abc', 'abXabc')",
      "('Hiabc', 'abcd')",
      "('Hiabc', 'bc')",
      "('Hiabcx', 'bc')",
      "('abc', 'abc')",
      "('xyz', '12xyz')",
      "('yz', '12xz')",
      "('Z', '12xz')",
      "('12', '12')",
      "('abcXYZ', 'abcDEF')",
      "('ab', 'ab12')",
      "('ab', '12ab')",
    ]
  },
  {
    question: "Return true if the given string contains an appearance of \"xyz\" where the xyz is not directly preceeded by a period (.). So \"xxyz\" counts but \"x.xyz\" does not.",
    title: "String-2",
    name: "xyzThere",
    inputs: [
      "('abcxyz')",
      "('abc.xyz')",
      "('xyz.abc')",
      "('abcxy')",
      "('xyz')",
      "('xy')",
      "('x')",
      "('')",
      "('abc.xyzxyz')",
      "('abc.xxyz')",
      "('.xyz')",
      "('12.xyz')",
      "('12xyz')",
      "('1.xyz.xyz2.xyz')",
    ]
  },
  {
    question: "Return true if the given string contains a \"bob\" string, but where the middle 'o' char can be any char.",
    title: "String-2",
    name: "bobThere",
    inputs: [
      "('abcbob')",
      "('b9b')",
      "('bac')",
      "('bbb')",
      "('abcdefb')",
      "('123abcbcdbabxyz')",
      "('b12')",
      "('b1b')",
      "('b12b1b')",
      "('bbc')",
      "('bbb')",
      "('bb')",
      "('b')",
    ]
  },
  {
    question: "We'll say that a String is xy-balanced if for all the 'x' chars in the string, there exists a 'y' char somewhere later in the string. So \"xxy\" is balanced, but \"xyx\" is not. One 'y' can balance multiple 'x's. Return true if the given string is xy-balanced.",
    title: "String-2",
    name: "xyBalance",
    inputs: [
      "('aaxbby')",
      "('aaxbb')",
      "('yaaxbb')",
      "('yaaxbby')",
      "('xaxxbby')",
      "('xaxxbbyx')",
      "('xxbxy')",
      "('xxbx')",
      "('bbb')",
      "('bxbb')",
      "('bxyb')",
      "('xy')",
      "('y')",
      "('x')",
      "('')",
      "('yxyxyxyx')",
      "('yxyxyxyxy')",
      "('12xabxxydxyxyzz')",
    ]
  },
  {
    question: "Given two strings, a and b, create a bigger string made of the first char of a, the first char of b, the second char of a, the second char of b, and so on. Any leftover chars go at the end of the result.",
    title: "String-2",
    name: "mixString",
    inputs: [
      "('abc', 'xyz')",
      "('Hi', 'There')",
      "('xxxx', 'There')",
      "('xxx', 'X')",
      "('2/', '27 around')",
      "('', 'Hello')",
      "('Abc', '')",
      "('', '')",
      "('a', 'b')",
      "('ax', 'b')",
      "('a', 'bx')",
      "('So', 'Long')",
      "('Long', 'So')"
    ]
  },
  {
    question: "Given a string and an int n, return a string made of n repetitions of the last n characters of the string. You may assume that n is between 0 and the length of the string, inclusive.",
    title: "String-2",
    name: "repeatEnd",
    inputs: [
      "('Hello', 3)",
      "('Hello', 2)",
      "('Hello', 1)",
      "('Hello', 0)",
      "('abc', 3)",
      "('1234', 2)",
      "('1234', 3)",
      "('', 0)"
    ]
  },
  {
    question: "Given a string and an int n, return a string made of the first n characters of the string, followed by the first n-1 characters of the string, and so on. You may assume that n is between 0 and the length of the string, inclusive (i.e. n >= 0 and n <= str.length()).",
    title: "String-2",
    name: "repeatFront",
    inputs: [
      "('Chocolate', 4)",
      "('Chocolate', 3)",
      "('Ice Cream', 2)",
      "('Ice Cream', 1)",
      "('Ice Cream', 0)",
      "('xyz', 3)",
      "('', 0)",
      "('Java', 4)",
      "('Java', 1)"
    ]
  },
  {
    question: "Given two strings, word and a separator sep, return a big string made of count occurrences of the word, separated by the separator string.",
    title: "String-2",
    name: "repeatSeparator",
    inputs: [
      "('Word', 'X', 3)",
      "('This', 'And', 2)",
      "('This', 'And', 1)",
      "('Hi', '-n-', 2)",
      "('AAA', '', 1)",
      "('AAA', '', 0)",
      "('A', 'B', 5)",
      "('abc', 'XX', 3)",
      "('abc', 'XX', 2)",
      "('abc', 'XX', 1)",
      "('XYZ', 'a', 2)"
    ]
  },
  {
    question: "Given a string, consider the prefix string made of the first N chars of the string. Does that prefix string appear somewhere else in the string? Assume that the string is not empty and that N is in the range 1..str.length().",
    title: "String-2",
    name: "prefixAgain",
    inputs: [
      "('abXYabc', 1)",
      "('abXYabc', 2)",
      "('abXYabc', 3)",
      "('xyzxyxyxy', 2)",
      "('xyzxyxyxy', 3)",
      "('Hi12345Hi6789Hi10', 1)",
      "('Hi12345Hi6789Hi10', 2)",
      "('Hi12345Hi6789Hi10', 3)",
      "('Hi12345Hi6789Hi10', 4)",
      "('a', 1)",
      "('aa', 1)",
      "('ab', 1)"
    ]
  },
  {
    question: "Given a string, does \"xyz\" appear in the middle of the string? To define middle, we'll say that the number of chars to the left and right of the \"xyz\" must differ by at most one. This problem is harder than it looks.",
    title: "String-2",
    name: "xyzMiddle",
    inputs: [
      "('AAxyzBB')",
      "('AxyzBB')",
      "('AxyzBBB')",
      "('AxyzBBBB')",
      "('AAAxyzB')",
      "('AAAxyzBB')",
      "('AAAAxyzBB')",
      "('AAAAAxyzBBB')",
      "('1x345xyz12x4')",
      "('xyzAxyzBBB')",
      "('xyzAxyzBxyz')",
      "('xyzxyzAxyzBxyzxyz')",
      "('xyzxyzxyzBxyzxyz')",
      "('xyzxyzAxyzxyzxyz')",
      "('xyzxyzAxyzxyzxy')",
      "('AxyzxyzBB')",
      "('')",
      "('x')",
      "('xy')",
      "('xyz')",
      "('xyzz')"
    ]
  },
  {
    question: "A sandwich is two pieces of bread with something in between. Return the string that is between the first and last appearance of \"bread\" in the given string, or return the empty string \"\" if there are not two pieces of bread.",
    title: "String-2",
    name: "getSandwich",
    inputs: [
      "('breadjambread')",
      "('xxbreadjambreadyy')",
      "('xxbreadyy')",
      "('xxbreadbreadjambreadyy')",
      "('breadAbread')",
      "('breadbread')",
      "('abcbreaz')",
      "('xyz')",
      "('')",
      "('breadbreaxbread')",
      "('breaxbreadybread')",
      "('breadbreadbreadbread')"
    ]
  },
  {
    question: "Returns true if for every '*' (star) in the string, if there are chars both immediately before and after the star, they are the same.",
    title: "String-2",
    name: "sameStarChar",
    inputs: [
      "('xy*yzz')",
      "('xy*zzz')",
      "('*xa*az')",
      "('*xa*bz')",
      "('*xa*a*')",
      "('')",
      "('*xa*a*a')",
      "('*xa*a*b')",
      "('*12*2*2')",
      "('12*2*3*')",
      "('abcDEF')",
      "('XY*YYYY*Z*')",
      "('XY*YYYY*Y*')",
      "('12*2*3*')",
      "('*')",
      "('**')"
    ]
  },
  {
    question: "Given a string, compute a new string by moving the first char to come after the next two chars, so \"abc\" yields \"bca\". Repeat this process for each subsequent group of 3 chars, so \"abcdef\" yields \"bcaefd\". Ignore any group of fewer than 3 chars at the end.",
    title: "String-2",
    name: "oneTwo",
    inputs: [
      "('abc')",
      "('tca')",
      "('tcagdo')",
      "('chocolate')",
      "('1234567890')",
      "('xabxabxabxabxabxabxab')",
      "('abcdefx')",
      "('abcdefxy')",
      "('abcdefxyz')",
      "('')",
      "('x')",
      "('xy')",
      "('xyz')",
      "('abcdefghijklkmnopqrstuvwxyz1234567890')",
      "('abcdefghijklkmnopqrstuvwxyz123456789')",
      "('abcdefghijklkmnopqrstuvwxyz12345678')"
    ]
  },
  {
    question: "Look for patterns like \"zip\" and \"zap\" in the string -- length-3, starting with 'z' and ending with 'p'. Return a string where for all such words, the middle letter is gone, so \"zipXzap\" yields \"zpXzp\".",
    title: "String-2",
    name: "zipZap",
    inputs: [
      "('zipXzap')",
      "('zopzop')",
      "('zzzopzop')",
      "('zibzap')",
      "('zip')",
      "('zi')",
      "('z')",
      "('')",
      "('zzp')",
      "('abcppp')",
      "('azbcppp')",
      "('azbcpzpp')"
    ]
  },
  {
    question: "Return a version of the given string, where for every star (*) in the string the star and the chars immediately to its left and right are gone. So \"ab*cd\" yields \"ad\" and \"ab**cd\" also yields \"ad\".",
    title: "String-2",
    name: "starOut",
    inputs: [
      "('ab*cd')",
      "('ab**cd')",
      "('sm*eilly')",
      "('sm*eil*ly')",
      "('sm**eil*ly')",
      "('sm***eil*ly')",
      "('stringy*')",
      "('*stringy')",
      "('*str*in*gy')",
      "('abc')",
      "('a*bc')",
      "('ab')",
      "('a*b')",
      "('a')",
      "('a*')",
      "('*a')",
      "('*')",
      "('')"
    ]
  },
  {
    question: "Given a string and a non-empty word string, return a version of the original String where all chars have been replaced by pluses (\"+\"), except for appearances of the word string which are preserved unchanged.",
    title: "String-2",
    name: "plusOut",
    inputs: [
      "('12xy34', 'xy')",
      "('12xy34', '1')",
      "('12xy34xyabcxy', 'xy')",
      "('abXYabcXYZ', 'ab')",
      "('abXYabcXYZ', 'abc')",
      "('abXYabcXYZ', 'XY')",
      "('abXYxyzXYZ', 'XYZ')",
      "('--++ab', '++')",
      "('aaxxxxbb', 'xx')",
      "('123123', '3')"
    ]
  },
  {
    question: "Given a string and a non-empty word string, return a string made of each char just before and just after every appearance of the word in the string. Ignore cases where there is no char before or after the word, and a char may be included twice if it is between two words.",
    title: "String-2",
    name: "wordEnds",
    inputs: [
      "('abcXY123XYijk', 'XY')",
      "('XY123XY', 'XY')",
      "('XY1XY', 'XY')",
      "('XYXY', 'XY')",
      "('XY', 'XY')",
      "('Hi', 'XY')",
      "('', 'XY')",
      "('abc1xyz1i1j', '1')",
      "('abc1xyz1', '1')",
      "('abc1xyz11', '1')",
      "('abc1xyz1abc', 'abc')",
      "('abc1xyz1abc', 'b')",
      "('abc1abc1abc', 'abc')"
    ]
  },
  {
    question: 'Given a string, count the number of words ending in \'y\' or \'z\' -- so the \'y\' in "heavy" and the \'z\' in "fez" count, but not the \'y\' in "yellow" (not case sensitive). We\'ll say that a y or z is at the end of a word if there is not an alphabetic letter immediately following it. (Note: Character.isLetter(char) tests if a char is an alphabetic letter.)',
    title: 'String-3',
    name: 'countYZ',
    inputs: [
      "('fez day')",
      "('day fez')",
      "('day fyyyz')",
      "('day yak')",
      "('day:yak')",
      "('!!day--yaz!!')",
      "('yak zak')",
      "('DAY abc XYZ')",
      "('aaz yyz my')",
      "('y2bz')",
      "('zxyx')"
    ]
  },
  {
    question: 'Given two strings, base and remove, return a version of the base string where all instances of the remove string have been removed (not case sensitive). You may assume that the remove string is length 1 or more. Remove only non-overlapping instances, so with "xxx" removing "xx" leaves "x".',
    title: 'String-3',
    name: 'withoutString',
    inputs: [
      "('Hello there', 'llo')",
      "('Hello there', 'e')",
      "('Hello there', 'x')",
      "('This is a FISH', 'IS')",
      "('THIS is a FISH', 'is')",
      "('THIS is a FISH', 'iS')",
      "('abxxxxab', 'xx')",
      "('abxxxab', 'xx')",
      "('abxxxab', 'x')",
      "('xxx', 'x')",
      "('xxx', 'xx')",
      "('xyzzy', 'Y')",
      "('', 'x')",
      "('abcabc', 'b')",
      "('AA22bb', '2')",
      "('1111', '1')",
      "('1111', '11')",
      "('MkjtMkx', 'Mk')",
      "('Hi HoHo', 'Ho')"
    ]
  },
  {
    question: 'Given a string, return true if the number of appearances of "is" anywhere in the string is equal to the number of appearances of "not" anywhere in the string (case sensitive).',
    title: 'String-3',
    name: 'equalIsNot',
    inputs: [
      "('This is not')",
      "('This is notnot')",
      "('noisxxnotyynotxisi')",
      "('noisxxnotyynotxsi')",
      "('xxxyyyzzzintint')",
      "('')",
      "('isisnotnot')",
      "('isisnotno7Not')",
      "('isnotis')",
      "('mis3notpotbotis')"
    ]
  },
  {
    question: 'We\'ll say that a lowercase \'g\' in a string is "happy" if there is another \'g\' immediately to its left or right. Return true if all the g\'s in the given string are happy.',
    title: 'String-3',
    name: 'gHappy',
    inputs: [
      "('xxggxx')",
      "('xxgxx')",
      "('xxggyygxx')",
      "('g')",
      "('gg')",
      "('')",
      "('xxgggxyz')",
      "('xxgggxyg')",
      "('xxgggxygg')",
      "('mgm')",
      "('mggm')",
      "('yyygggxyy')"
    ]
  },
  {
    question: 'We\'ll say that a "triple" in a string is a char appearing three times in a row. Return the number of triples in the given string. The triples may overlap.',
    title: 'String-3',
    name: 'countTriple',
    inputs: [
      "('abcXXXabc')",
      "('xxxabyyyycd')",
      "('a')",
      "('')",
      "('XXXabc')",
      "('XXXXabc')",
      "('XXXXXabc')",
      "('222abyyycdXXX')",
      "('abYYYabXXXXXab')",
      "('abYYXabXXYXXab')",
      "('abYYXabXXYXXab')",
      "('122abhhh2')"
    ]
  },
  {
    question: 'Given a string, return the sum of the digits 0-9 that appear in the string, ignoring all other characters. Return 0 if there are no digits in the string. (Note: Character.isDigit(char) tests if a char is one of the chars \'0\', \'1\', .. \'9\'. Integer.parseInt(string) converts a string to an int.)',
    title: 'String-3',
    name: 'sumDigits',
    inputs: [
      "('aa1bc2d3')",
      "('aa11b33')",
      "('Chocolate')",
      "('5hoco1a1e')",
      "('123abc123')",
      "('')",
      "('Hello')",
      "('X1z9b2')",
      "('5432a')"
    ]
  },
  {
    question: 'Given a string, return the longest substring that appears at both the beginning and end of the string without overlapping. For example, sameEnds("abXab") is "ab".',
    title: 'String-3',
    name: 'sameEnds',
    inputs: [
      "('abXYab')",
      "('xx')",
      "('xxx')",
      "('xxxx')",
      "('javaXYZjava')",
      "('javajava')",
      "('xavaXYZjava')",
      "('Hello! and Hello!')",
      "('x')",
      "('')",
      "('abcb')",
      "('mymmy')"
    ]
  },
  {
    question: 'Given a string, look for a mirror image (backwards) string at both the beginning and end of the given string. In other words, zero or more characters at the very begining of the given string, and at the very end of the string in reverse order (possibly overlapping). For example, the string "abXYZba" has the mirror end "ab".',
    title: 'String-3',
    name: 'mirrorEnds',
    inputs: [
      "('abXYZba')",
      "('abca')",
      "('aba')",
      "('abab')",
      "('xxx')",
      "('xxYxx')",
      "('Hi and iH')",
      "('x')",
      "('')",
      "('123and then 321')",
      "('band andab')"
    ]
  },
  {
    question: 'Given a string, return the length of the largest "block" in the string. A block is a run of adjacent chars that are the same.',
    title: 'String-3',
    name: 'maxBlock',
    inputs: [
      "('hoopla')",
      "('abbCCCddBBBxx')",
      "('')",
      "('xyz')",
      "('xxyz')",
      "('xyzz')",
      "('abbbcbbbxbbbx')",
      "('XXBBBbbxx')",
      "('XXBBBBbbxx')",
      "('XXBBBbbxxXXXX')",
      "('XX2222BBBbbXX2222')"
    ]
  },
  {
    question: 'Given a string, return the sum of the numbers appearing in the string, ignoring all other characters. A number is a series of 1 or more digit chars in a row. (Note: Character.isDigit(char) tests if a char is one of the chars \'0\', \'1\', .. \'9\'. Integer.parseInt(string) converts a string to an int.)',
    title: 'String-3',
    name: 'sumNumbers',
    inputs: [
      "('abc123xyz')",
      "('aa11b33')",
      "('7 11')",
      "('Chocolate')",
      "('5hoco1a1e')",
      "('5$$1;;1!!')",
      "('a1234bb11')",
      "('')",
      "('a22bbb3')"
    ]
  },
  {
    question: 'Given a string, return a string where every appearance of the lowercase word "is" has been replaced with "is not". The word "is" should not be immediately preceeded or followed by a letter -- so for example the "is" in "this" does not count. (Note: Character.isLetter(char) tests if a char is a letter.)',
    title: 'String-3',
    name: 'notReplace',
    inputs: [
      "('is test')",
      "('is-is')",
      "('This is right')",
      "('This is isabell')",
      "('')",
      "('is')",
      "('isis')",
      "('Dis is bliss is')",
      "('is his')",
      "('xis yis')",
      "('AAAis is')"
    ]
  }
];