import numpy as np

def lda(X, y):
    classes = np.unique(y)
    mean_overall = np.mean(X, axis=0)
    mean_classes = [np.mean(X[y == c], axis=0) for c in classes]
    
    S_B = np.zeros((X.shape[1], X.shape[1]))  # Between-class scatter
    S_W = np.zeros((X.shape[1], X.shape[1]))  # Within-class scatter
    
    for i, c in enumerate(classes):
        n_c = X[y == c].shape[0]
        mean_c = mean_classes[i].reshape(X.shape[1], 1)
        mean_overall = mean_overall.reshape(X.shape[1], 1)
        
        S_B += n_c * (mean_c - mean_overall).dot((mean_c - mean_overall).T)
        S_W += np.cov(X[y == c].T) * (n_c - 1)
    
    eigvals, eigvecs = np.linalg.eig(np.linalg.inv(S_W).dot(S_B))
    return eigvecs[:, np.argmax(eigvals)]

X = np.array([[1, 2], [2, 3], [1.5, 2.5], [6, 7], [7, 8], [6.5, 7.5]])
y = np.array([0, 0, 0, 1, 1, 1])
w = lda(X, y)
print(f"LDA weights: {w}")
