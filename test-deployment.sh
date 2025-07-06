#!/bin/bash

echo "🔍 Vercel Deployment Test"
echo "========================"
echo ""

# Test 1: Check test HTML file
echo "Test 1: Checking test HTML file..."
response=$(curl -s https://sanity-blog-public.vercel.app/vercel-quick-test.html | head -20)
if echo "$response" | grep -q "ULTRA AI THEME IS ACTIVE"; then
    echo "✅ Test file found! Deployment is working."
else
    echo "❌ Test file not found. Deployment issue persists."
fi

echo ""
echo "Test 2: Checking deployment info file..."
response2=$(curl -s https://sanity-blog-public.vercel.app/deployment-check.txt | head -5)
if echo "$response2" | grep -q "ULTRA AI THEME"; then
    echo "✅ Deployment info found!"
else
    echo "❌ Deployment info not found."
fi

echo ""
echo "Test 3: Checking main page for theme banner..."
response3=$(curl -s https://sanity-blog-public.vercel.app/ | grep -o "ULTRA AI THEME")
if [ -n "$response3" ]; then
    echo "✅ Ultra AI theme banner found!"
else
    echo "❌ Ultra AI theme banner not found."
fi

echo ""
echo "Latest Git commit:"
git log --oneline -1
echo ""
echo "If all tests show ❌, please reconnect Git in Vercel settings."