import sys
from PIL import Image
import numpy as np
src, out = sys.argv[1], sys.argv[2]
a = np.asarray(Image.open(src).convert('RGB')).astype(float)
bg = np.array([0xf5,0xef,0xe3],float); navy=np.array([0x1f,0x2e,0x48],float); sage=np.array([0x83,0x91,0x84],float)
dn = np.linalg.norm(a-navy,axis=2); ds = np.linalg.norm(a-sage,axis=2)
fg = np.where((dn<ds)[...,None], navy, sage)
# 背景色から前景色への射影で不透明度を求める（アンチエイリアスを保持）
v = fg-bg; t = ((a-bg)*v).sum(2)/(v*v).sum(2)
alpha = np.clip(t,0,1)
alpha[alpha<0.04]=0
rgba = np.dstack([fg, alpha*255]).astype(np.uint8)
im = Image.fromarray(rgba,'RGBA')
bbox = im.getbbox(); print('bbox',bbox)
im = im.crop(bbox)
w,h = im.size; s=max(w,h); pad=int(s*0.04)
sq = Image.new('RGBA',(s+2*pad,s+2*pad),(0,0,0,0)); sq.paste(im,((s-w)//2+pad,(s-h)//2+pad))
sq.save(out+'-mark.png')
for n in (512,192,64): sq.resize((n,n),Image.LANCZOS).save(f'{out}-mark-{n}.png')
