var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': '每周內容(week2~week9)', 'text': 'week2 \n 創建github倉儲、設定新版可攜式套件 \n 1.創建課程倉儲並git clone到近端。 \n 2.用git config 設定name、email及proxy。 \n 3.用新指令 git submodule add 載下模組。 \n 4.輸入 python -m pip install flask cors 指令裝 pip 套件。 \n 5.練習開啟近端及遠端並更改網頁名稱。 \n \n \n \n week3 \n Solvespace 編譯 \n 1.先將 Y:\\portablegit\\bin\\sh.exe 改名為 sh_rename_for_solvespace.exe。 \n 2.在小黑框輸入 git version 檢查版本，版本必須在2.13以上。 \n 3.再輸入 \xa0git clone\xa0 --recurse-submodules 來取得子模組。 \n 4.將CMakeLists文字檔內的713跟714行前面打上"#"字號。 \n 5.將 \xa0libpng.dll.a 檔名更改為 libpng_static.a。 \n 6.到build子目錄執行cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release然後再執行mingw32-make。 \n 7.回到 solvespace 原始碼目錄,建立 build 目錄後進入 build 目錄。 \n 8.再執行一次cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release 接著執行mingw32-make。 \n \n \n \n week4 \n 完成前兩周的進度，並練習solvespace繪圖。', 'tags': '', 'url': '每周內容(week2~week9).html'}]};