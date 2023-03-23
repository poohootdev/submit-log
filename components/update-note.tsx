import type { NextPage } from 'next';
import React, { useState, useEffect, useRef } from 'react';
import { ClipboardCopyIcon, CheckCircleIcon, RefreshIcon } from '@heroicons/react/solid';

const CreateSubmitLog: NextPage = () => {
  const [origin, setOrigin] = useState('');

  const [jiraId, setJiraId] = useState('');
  const [jiraLink, setJiraLink] = useState('');
  const [result, setResult] = useState('');

  const copyContent = useRef<HTMLDivElement>(null);

  const regex = /https?:\/\/[^\s]+/g;

  useEffect(() => {
    const link = origin.match(regex);
    const id = `${link?.[0].split('/')[4]}`;
    const result = `${origin.split('[업데이트 노트]')[1]}`;

    setJiraId(id);
    setJiraLink(`${link?.[0]}`);

    if (result === 'undefined') {
      setResult('!![업데이트 노트]가 입력되어있지 않습니다. 해당지라에서 확인 바랍니다.');
    } else {
      setResult(result);
    }
  }, [origin]);

  const handleCopy = () => {
    const range = document.createRange();
    range.selectNode(copyContent.current as Node);
    window.getSelection()?.addRange(range);
    document.execCommand('copy');
    window.getSelection()?.removeAllRanges();

    alert('복사 완료');
  };

  async function onClickAttach(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    try {
      const clipboardItems = await navigator.clipboard.read();

      for (const clipboardItem of clipboardItems) {
        for (const type of clipboardItem.types) {
          const blob = await clipboardItem.getType(type);
          const text = blob.text();

          if (type === 'text/plain') {
            text.then((data) => {
              setOrigin(data.slice(1, -1));
            });
          } else if (type === 'image/png') {
            alert(`실패!\n클립보드에 이미지가 들어있어요.`);
          } else if (type === 'text/html') {
          }
        }
      }
    } catch (err) {
      alert(`서밋로그를 복사하세요.`);
    }
  }

  const onChangTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.id === 'textarea-keyword') {
      setOrigin(e.target.value);
    }
  };

  const onClickInit = () => {
    setOrigin('');
  };

  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        <div className="mt-3 ml-3 mb-3 mr-3 w-2/3">
          <div>
            <form className="space-y-3">
              <div className="col-span-3 sm:col-span-2">
                <div className="inline-flex rounded-md shadow">
                  <button className="py-4 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600" onClick={onClickAttach}>
                    구글 스프레드시트 붙이기 📋
                  </button>
                </div>

                <div className="hidden sm:block" aria-hidden="true">
                  <div className="py-5">
                    <div className="border-t border-gray-200" />
                  </div>
                </div>

                <div className="flex items-center text-sm text-gray-700">
                  {origin === '' ? <CheckCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-300" /> : <CheckCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-600" />}
                  원본
                </div>
                <textarea
                  name="textarea-keyword"
                  id="textarea-keyword"
                  rows={15}
                  autoComplete="given-name"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 w-full sm:text-sm border border-gray-300 rounded-md text-gray-400"
                  placeholder=""
                  onChange={onChangTextArea}
                  value={origin}
                  disabled
                />
              </div>

              <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                  <div className="border-t border-gray-200" />
                </div>
              </div>

              <div>
                <div className="flex items-center">
                  {origin !== '' ? <CheckCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-600" /> : <CheckCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-300" />}
                  <div className="text-sm font-medium text-gray-700">결과</div>
                </div>
              </div>
              <div ref={copyContent}>
                <span>{result}</span>
                <span className="text-blue-600">
                  <a href={jiraLink} target="_black">
                    {jiraId}
                  </a>
                </span>
              </div>
            </form>

            <div className="mt-20 text-right">
              <div className="inline-flex rounded-md shadow">
                <button
                  onClick={onClickInit}
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                >
                  <RefreshIcon className="-ml-1 mr-2 h-5 w-5" />
                  초기화
                </button>
              </div>

              <div className="inline-flex rounded-md shadow mt-3 sm:mt-0 sm:ml-3">
                <button
                  onClick={handleCopy}
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  <ClipboardCopyIcon className="-ml-1 mr-2 h-5 w-5" />
                  복사
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateSubmitLog;
