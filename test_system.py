#!/usr/bin/env python3
"""
SankatSaathi System Test Script
Tests all API endpoints and verifies system functionality
"""

import requests
import json
from datetime import datetime

BASE_URL = "http://localhost:8000"

def test_api_health():
    """Test API health endpoint"""
    print("\n🔍 Testing API Health...")
    try:
        response = requests.get(f"{BASE_URL}/api")
        data = response.json()
        print(f"✅ API Status: {data['status']}")
        print(f"   Crisis Dispatch: {data['services']['crisis_dispatch']}")
        print(f"   News Aggregator: {data['services']['news_aggregator']}")
        return response.status_code == 200
    except Exception as e:
        print(f"❌ API Health Check Failed: {e}")
        return False

def test_crisis_active():
    """Test getting active crises"""
    print("\n🔍 Testing Active Crises Endpoint...")
    try:
        response = requests.get(f"{BASE_URL}/api/crisis/active")
        data = response.json()
        crises = data.get('crises', [])
        print(f"✅ Found {len(crises)} active incidents")
        if crises:
            incident = crises[0]
            print(f"   Sample: {incident['title']} - {incident['severity']}")
        return response.status_code == 200
    except Exception as e:
        print(f"❌ Active Crises Test Failed: {e}")
        return False

def test_news_feed():
    """Test news aggregation endpoint"""
    print("\n🔍 Testing News Feed Endpoint...")
    try:
        response = requests.get(f"{BASE_URL}/api/news?limit=5")
        data = response.json()
        news_items = data if isinstance(data, list) else data.get('value', [])
        print(f"✅ Found {len(news_items)} news articles")
        if news_items:
            article = news_items[0]
            print(f"   Sample: {article.get('title', 'N/A')[:50]}...")
        return response.status_code == 200
    except Exception as e:
        print(f"❌ News Feed Test Failed: {e}")
        return False

def test_news_categories():
    """Test news categories endpoint"""
    print("\n🔍 Testing News Categories...")
    try:
        response = requests.get(f"{BASE_URL}/api/news/categories")
        data = response.json()
        categories = data.get('categories', [])
        print(f"✅ Found {len(categories)} categories")
        print(f"   Categories: {', '.join(categories[:5])}")
        return response.status_code == 200
    except Exception as e:
        print(f"❌ News Categories Test Failed: {e}")
        return False

def test_news_stats():
    """Test news statistics endpoint"""
    print("\n🔍 Testing News Statistics...")
    try:
        response = requests.get(f"{BASE_URL}/api/news/stats")
        data = response.json()
        print(f"✅ Total Articles: {data.get('total_articles', 0)}")
        print(f"   Latest Update: {data.get('latest_article_date', 'N/A')}")
        return response.status_code == 200
    except Exception as e:
        print(f"❌ News Stats Test Failed: {e}")
        return False

def run_all_tests():
    """Run all system tests"""
    print("=" * 60)
    print("🚀 SankatSaathi System Test Suite")
    print("=" * 60)
    print(f"Testing Backend: {BASE_URL}")
    print(f"Time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    
    tests = [
        ("API Health", test_api_health),
        ("Active Crises", test_crisis_active),
        ("News Feed", test_news_feed),
        ("News Categories", test_news_categories),
        ("News Statistics", test_news_stats),
    ]
    
    results = []
    for test_name, test_func in tests:
        result = test_func()
        results.append((test_name, result))
    
    print("\n" + "=" * 60)
    print("📊 Test Results Summary")
    print("=" * 60)
    
    passed = sum(1 for _, result in results if result)
    total = len(results)
    
    for test_name, result in results:
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{status} - {test_name}")
    
    print(f"\n🎯 Score: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 All tests passed! System is operational.")
    else:
        print("⚠️  Some tests failed. Check the logs above.")
    
    print("=" * 60)

if __name__ == "__main__":
    run_all_tests()
