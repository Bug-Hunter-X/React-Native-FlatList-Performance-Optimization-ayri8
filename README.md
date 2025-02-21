# React Native FlatList Performance Optimization

This repository demonstrates a common performance issue with React Native's FlatList component when dealing with large datasets and provides a solution using the `windowSize` and `removeClippedSubviews` props. 

## Problem
Rendering a large number of items in a FlatList can lead to performance issues, including slow scrolling, freezes, and potential crashes. This is due to FlatList initially rendering all items regardless of visibility.

## Solution
The solution involves using the `windowSize` prop to control the number of items rendered at a time and `removeClippedSubviews` to remove items that are off-screen, significantly improving performance.

## Usage
Clone the repository and run `npm install` to install dependencies. Run the app using a React Native development environment.
Compare the performance of the initial buggy component and the optimized component.