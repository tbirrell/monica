<div>
    <div class="br2 bg-white mb4">
      <? dump($metadata); ?>
        <metadata 
          hash="{{ $contact->hashID() }}"
          :metadata="{{ $metadata }}"
        >
        </metadata>
    </div>
</div>