# flex-attr

Flex Atrr is a set of CSS rules, which brings the power of flexbox into your project without you writing a single line of CSS yourself.
It's basically a fork of [Angular Material](https://github.com/angular/material) [without some attributes, which were found not useful, and couple features added.](#comparison-to-angular-material).
For a comprehensive guide check [original Angular Material documentaion](https://material.angularjs.org/latest/layout/introduction)

## Comparison to Angular Material

- [Added ability to generate CSS for a custom list of screen breakpoints](#custom-breakpoints)
- [Changed show and hide attributes override rules](#visibility-attributes-override-rules)
- Deprecated layout-padding attribute
- Deprecated layout-margin attribute

## Custom breakpoints

By default the preprocessor will generate CSS for the following screen size postfixes:
- xs: 600px
- sm: 960px
- md: 1280px
- lg: 1920px

You can easily override it by providing your list in your sass in a format of '<variable>: postfix screen-size':
```
$layout-breakpoints: xs 600px, sm 960px, md 1280px, lg 1920px !default;
```

## Visibility attributes override rules

- Rules without 'gt' postfix override ones with the postfix
- Show rules override Hide rules
- Print rules override regular rules
- All print rules are provided without 'gt' postfix

Example:
- hide show-md - hidden everywhere but md screens
- hide-gt-xs show-gt-sm hide-gt-lg - visible on xs screens, hidden on sm screens, visible on md and lg screens, hidden on screens greater than lg
- hide show-gt-xs hide-lg - hidden on xs screens, visible on sm, md screens, hidden on lg screens, visible on screens greater than lg
