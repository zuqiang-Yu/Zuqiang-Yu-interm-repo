import { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import axios from 'axios';

type Post = {
  id: number;
  title: string;
  body: string;
};

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000, // 10 秒超时
});

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get<Post[]>('/posts', {
        params: { _limit: 10 },
      });
      setPosts(response.data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response) {
          setError(`server error：${err.response.status}`);
        } else if (err.request) {
          setError('internet error, please retry it');
        } else {
          setError('failed, please retry');
        }
      } else {
        setError('unknow error');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#3b82f6" />
        <Text style={styles.loadingText}>loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity style={styles.retryButton} onPress={fetchPosts}>
          <Text style={styles.retryText}>retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>essay list</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title} numberOfLines={1}>
              {item.title}
            </Text>
            <Text style={styles.body} numberOfLines={2}>
              {item.body}
            </Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f3f4f6', padding: 16 },
  centered: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#111827',
  },
  card: { backgroundColor: 'white', borderRadius: 12, padding: 16 },
  title: { fontSize: 16, fontWeight: '600', color: '#1f2937', marginBottom: 6 },
  body: { fontSize: 14, color: '#6b7280', lineHeight: 20 },
  separator: { height: 12 },
  loadingText: { marginTop: 12, color: '#6b7280', fontSize: 16 },
  errorText: { color: '#ef4444', fontSize: 16, marginBottom: 16 },
  retryButton: {
    backgroundColor: '#3b82f6',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 8,
  },
  retryText: { color: 'white', fontWeight: '600' },
});
